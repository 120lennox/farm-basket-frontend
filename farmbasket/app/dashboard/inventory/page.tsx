"use client";
import React, { useState, createContext, useContext, useEffect } from "react";

// Interfaces
interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
  description: string; 
}

interface InventoryContextType {
  inventory: Product[];
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: string) => void;
  addProduct: (newProduct: Product) => void;
}

// Context
const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

// Provider Component
const InventoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [inventory, setInventory] = useState<Product[]>([]);

  const updateProduct = (updatedProduct: Product) => {
    setInventory((prevInventory) =>
      prevInventory.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (productId: string) => {
    setInventory((prevInventory) =>
      prevInventory.filter((product) => product.id !== productId)
    );
  };

  const addProduct = (newProduct: Product) => {
    setInventory((prevInventory) => [...prevInventory, newProduct]);
  };

  return (
    <InventoryContext.Provider
      value={{ inventory, updateProduct, deleteProduct, addProduct }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context)
    throw new Error("useInventory must be used within an InventoryProvider");
  return context;
};

// Utility Function for API Requests
const apiRequest = async (url: string, options: RequestInit) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Authentication token is missing. Please log in again.");
  }

const enhancedOptions ={
  ...options,
  headers: {
    ...(!(options.body instanceof FormData) && { 
      'Content-Type': 'application/json' 
    }),
    ...(options.headers || {}),
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json' 
}
}

  const response = await fetch(url, enhancedOptions);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "API request failed");
  }
  return response.json();
};

// Inventory Page Component
const InventoryPage = () => {
  const { inventory, updateProduct, deleteProduct, addProduct } = useInventory();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const shopId = localStorage.getItem("shopId");
      const shopIdNumber = shopId ? parseInt(shopId, 10) : null;

      try {
        if (shopIdNumber) {
          const result = await apiRequest(
            `https://farm-basket3.onrender.com/shop/${shopIdNumber}/products`,
            { method: "GET" }
          );
          result.forEach((product: Product) => addProduct(product));
        } else {
          setError("Shop ID is missing.");
        }
      } catch (err) {
        setError(`Error fetching shop products: ${err instanceof Error ? err.message : err}`);
      }
    };

    fetchData();
  }, [addProduct]);

  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    setEditingProduct(null);
    setIsAddingProduct(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-2xl text-black font-bold mb-4">Product Management</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventory.map((product) => (
            <div key={product.id} className="relative bg-white border rounded-lg p-4">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md mb-2"
                />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-600">Category: {product.category}</p>
                <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
              </div>

              <div className="absolute top-2 right-2">
                <div className="relative group">
                  <button className="text-gray-500 hover:text-black">☰</button>
                  <div className="absolute right-0 bg-white border rounded shadow-md hidden group-hover:block">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="block px-4 py-2 text-sm text-blue-500 hover:bg-gray-100 w-full text-left"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 w-full text-left"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-4 bg-green-500 text-black px-4 py-2 rounded shadow"
          onClick={() => setIsAddingProduct(true)}
        >
          Add New Product
        </button>
      </div>

      {(editingProduct || isAddingProduct) && (
        <ProductModal
          product={editingProduct || null}
          onClose={() => {
            setEditingProduct(null);
            setIsAddingProduct(false);
          }}
          onSave={handleSaveProduct}
        />
      )}
    </div>
  );
};

// Product Modal Component
const ProductModal = ({
  product,
  onClose,
  onSave,
}: {
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}) => {
  const [formData, setFormData] = useState<Product>(
    product || { id: `${Date.now()}`, name: "", quantity: 0, price: 0, image: "", category: "", description:"" }
  );
  const [error, setError] = useState("");

  const categories = ["Farm machinery", "Pesticides", "Herbicides", "Poultry", "Farm Produce"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? +value : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = (e.target as any).image.files?.[0];
    try {
      const productResponse = await apiRequest(
        "https://farm-basket3.onrender.com/products/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            description: formData.description,
            category: formData.category,
            price: formData.price,
            quantity: formData.quantity,
          }),
        }
      );

      const file = (e.target as any).image.files?.[0];
      if (file) {
        const imageFormData = new FormData();
        imageFormData.append("image", file);
        imageFormData.append("productid", productResponse.id);

        await apiRequest("https://farm-basket3.onrender.com/images/product/image", {
          method: "POST",
          body: JSON.stringify({
          })
        });
      
    }
      onSave(productResponse);
      onClose();
    } catch (err) {
      setError(`Unable to save product: ${err instanceof Error
        ? err.message
        : "An unknown error occurred"}
      `);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-black font-bold mb-4">
          {product ? "Edit Product" : "Add New Product"}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4 text-black">
          <label htmlFor="name" className="block text-sm text-black font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4 text-black">
          <label htmlFor="category" className="block text-sm text-black font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 text-black">
          <label htmlFor="description" className="block text-sm text-black font-medium mb-1">
            description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4 text-black">
          <label htmlFor="price" className="block text-sm text-black font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4 text-black">
          <label htmlFor="quantity" className="block text-sm text-black font-medium mb-1">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4 text-black">
          <label htmlFor="image" className="block text-sm text-black font-medium mb-1">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded shadow"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default function Inventory() {
  return (
    <InventoryProvider>
      <InventoryPage />
    </InventoryProvider>
  );
}
