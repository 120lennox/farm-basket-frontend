"use client";
import { useState, useEffect } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch whats in the cart data from the backend
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await fetch(
          "https://farm-basket3.onrender.com/api/cart-summary",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch cart data.");
        }

        const data = await res.json();
        setCartItems(data.cartItems || []);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-yellow-50">
        <h1 className="text-xl font-semibold text-gray-700">Loading....</h1>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-yellow-50">
        <h1 className="text-xl font-semibold text-gray-700">
          Your cart is empty.
        </h1>
      </div>
    );
  }

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="bg-yellow-50 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Shopping Cart
        </h1>

        {/* Table Headers */}
        <div className="grid grid-cols-4 text-gray-600 font-semibold border-b pb-3 mb-3">
          <h2>ITEM</h2>
          <h2>QUANTITY</h2>
          <h2>PRICE</h2>
          <h2>TOTAL</h2>
        </div>

        {/* Cart Items */}
        {cartItems.map((item, index) => (
          <div
            key={item.id || index}
            className="grid grid-cols-4 items-center gap-4 text-gray-800 py-3 border-b"
          >
            <div className="flex items-center">
              <img
                src={items.image || "/placeholder.png"}
                alt={item.description || "Product"}
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <span className="ml-4">
                {item.description || "No Description"}
              </span>
            </div>
            <div className="text-center">
              <span>{item.quantity}</span>
            </div>
            <div className="text-center">
              <span>${item.price.toFixed(2)}</span>
            </div>
            <div className="text-center">
              <span>${(item.quantity * item.price).toFixed(2)}</span>
            </div>
          </div>
        ))}

        {/* Total Section */}
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Total:</h2>
          <span className="text-xl font-bold text-green-700">
            ${totalAmount.toFixed(2)}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-300">
            Continue Shopping
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md shadow hover:bg-green-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
