"use client";
import React, { useState, createContext, useContext } from "react";


interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}


interface InvetoryContextType {
  invetory: Product[];
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: string) => void;
  addProduct: (newProduct: Product) => void;
}

const initialInvetory: Product[] = [
  { id: "1", name: "Tractor", quantity: 5, price: 15000, image: "/images/tractor.jpg", category: "Farm Machinery" },
  { id: "2", name: "Glyphosate", quantity: 20, price: 100, image: "/images/glyphosate.jpg", category: "Herbicides" },
  { id: "3", name: "Neem Oil", quantity: 10, price: 50, image: "/images/neem-oil.jpg", category: "Pesticides" },
];


const InvetoryContext = createContext<InvetoryContextType | undefined>(undefined);

const InvetoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [invetory, setInvetory] = useState<Product[]>(initialInvetory);

  const updateProduct = (updatedProduct: Product) => {
    setInvetory((prevInvetory) =>
      prevInvetory.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  const deleteProduct = (productId: string) => {
    setInvetory((prevInvetory) => prevInvetory.filter((product) => product.id !== productId));
  };

  const addProduct = (newProduct: Product) => {
    setInvetory((prevInvetory) => [...prevInvetory, newProduct]);
  };

  return (
    <InvetoryContext.Provider value={{ invetory, updateProduct, deleteProduct, addProduct }}>
      {children}
    </InvetoryContext.Provider>
  );
};

// Custom hook for StockContext
const useInvetory = () => {
  const context = useContext(InvetoryContext);
  if (!context) throw new Error("useInvetory must be used within a InvetoryProvider");
  return context;
};

// StockPage Component
const InvetoryPage = () => {
  const { invetory, updateProduct, deleteProduct, addProduct } = useInvetory();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

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
            {invetory.map((product) => (
              <div key={product.id} className="relative bg-white border rounded-lg p-4">
                {/* Product Display */}
                <div>
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md mb-2" />
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-600">Category: {product.category}</p>
                  <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                  <p className="text-sm text-gray-600">Price: ${product.price}</p>
                </div>

                {/* Menu for Edit/Delete */}
                <div className="absolute top-2 right-2">
                  <div className="relative group">
                    <button className="text-gray-500 hover:text-black">☰</button>
                    <div className="absolute right-0 bg-white border  rounded shadow-md hidden group-hover:block">
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

// Modal Component
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? +value : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-lg text-black font-bold mb-4">{product ? "Edit Product" : "Add Product"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
        >
          <div className="mb-4 text-black">
            <label className="block text-sm text-black font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4 text-black">
            <label className="block text-sm text-black font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4 text-black">
            <label className="block text-sm text-black font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4 text-black">
            <label className="block text-sm text-black font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4 text-black">
            <label className="block text-sm text-black font-medium">Image</label>
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
            <button
              type="button"
              onClick={onClose}
              className="text-red-500 px-4 py-2 rounded hover:bg-red-100"
            >
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

// Export the StockPage wrapped with StockProvider
export default function Invetory() {
  return (
    <InvetoryProvider>
      <InvetoryPage />
    </InvetoryProvider>
  );
}
