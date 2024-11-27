"use client";
import { fetchShopProducts } from "@/app/lib/data";
import React, { useState, createContext, useContext, useEffect } from "react";

// Interfaces
interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
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

  // Update product
  const updateProduct = (updatedProduct: Product) => {
    setInventory((prevInventory) =>
      prevInventory.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Delete product
  const deleteProduct = (productId: string) => {
    setInventory((prevInventory) =>
      prevInventory.filter((product) => product.id !== productId)
    );
  };

  // Add product
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

// Custom hook for accessing inventory context
const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context)
    throw new Error("useInventory must be used within an InventoryProvider");
  return context;
};

// Inventory Page Component
const InventoryPage = () => {
  const { inventory, updateProduct, deleteProduct, addProduct } = useInventory();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [error, setError] = useState("");

  // Fetch products on mount
  useEffect(() => {
    
    const fetchData = async (shopId: number) => {
      try {
        const result = await fetchShopProducts(shopId); // Replace with your API call
        result.forEach((product: Product) => addProduct(product));
      } catch (err) {
        setError(`Error fetching shop products: ${err}`);
      }
    };

    fetchData(1); // Replace with the actual shop ID
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventory.map((product) => (
            <div key={product.id} className="relative bg-white border rounded-lg p-4">
              {/* Product Display */}
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

              {/* Menu for Edit/Delete */}
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

        {/* Add Product Button */}
        <button
          className="mt-4 bg-green-500 text-black px-4 py-2 rounded shadow"
          onClick={() => setIsAddingProduct(true)}
        >
          Add New Product
        </button>
      </div>

      {/* Modal for Add/Edit */}
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
    product || { id: `${Date.now()}`, name: "", quantity: 0, price: 0, image: "", category: "" }
  );
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? +value : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://farm-basket3.onrender.com/products/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          type: formData.category,
          price: formData.price,
          quantity: formData.quantity,
        }),
      });
      
      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        setError(`Error saving product: ${data.message}`);
      } else {
        onSave(data);
        onClose();
        const imageResponse = await fetch("https://farm-basket3.onrender.com/images/product/image", {
          method : "POST",
          headers: { "Content-Type" : "aplication/json" },
          body: JSON.stringify({
            image : formData.image,
            productid: data.productid
          })
        })
      }
    } catch (err) {
      setError(`Unable to save product: ${err}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-lg text-black font-bold mb-4">
          {product ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          {["name", "category", "quantity", "price"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium text-black capitalize">{field}</label>
              <input
                type={field === "quantity" || field === "price" ? "number" : "text"}
                name={field}
                value={formData[field as keyof Product] as string | number}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
          ))}
          <div className="mb-4 text-black">
            <label className="block text-sm font-medium text-black">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
                }
              }}
              className="w-full border rounded p-2"
              required={!product}
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="text-red-500 px-4 py-2 rounded hover:bg-red-100">
              Cancel
            </button>
            <button type="submit" className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the InventoryPage wrapped with InventoryProvider
export default function Inventory() {
  return (
    <InventoryProvider>
      <InventoryPage />
    </InventoryProvider>
  );
}

