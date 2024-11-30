"use client";

import { useState } from "react";

export default function CheckOut() {
  const [quantity, setQuantity] = useState<number>(1);
  const pricePerUnit = 500; // Price for a single water pump
  const productDescription =
    "High-quality water pump suitable for agricultural and domestic use.";

  const handleIncrement = (): void => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const totalPrice = pricePerUnit * quantity;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Check Out</h1>

        {/* Product Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Water Pump</h2>
          <p className="text-gray-700 mt-2">{productDescription}</p>
          <p className="text-green-600 font-bold mt-4">
            Price: ${pricePerUnit.toFixed(2)} per unit
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() =>
            alert(
              `Proceeding to payment for ${quantity} water pump(s). Total: $${totalPrice.toFixed(
                2
              )}`
            )
          }
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
