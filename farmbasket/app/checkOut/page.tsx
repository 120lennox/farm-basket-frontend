"use client";
import { useState } from "react";

export default function Checkout() {
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState(0);

  const handleRating = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="w-[300px] h-[300px] bg-gray-300 rounded-lg flex items-center justify-center"></div>
        <h1>image here</h1>
      </div>

      <div className="bg-yellow-800 p-6 rounded-lg shadow-lg text-white w-full lg:w-1/2 max-w-lg">
        <h1 className="font-extrabold text-2xl mb-4">Water Pump</h1>
        <p className="mb-6 text-gray-200">
          Powerful and energy-efficient water pump is perfect for a variety of
          residential and light commercial applications.
        </p>

        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              onClick={() => handleRating(index)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={index < rating ? "gold" : "gray"}
              className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-125"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-sm mb-6">
          {rating > 0
            ? `You rated this product ${rating} out of 5 stars.`
            : "Click on the stars to rate this product."}
        </p>

        <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
          <div>
            <p className="text-lg font-bold">
              <span className="text-sm ">MK</span>550,000
            </p>
          </div>
          <h2 className="text-green-400 font-bold">Save MK 60,000</h2>
        </div>

        <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
            <button
              className="px-4 py-2 text-white hover:bg-gray-600"
              onClick={() => setItems(items - 1)}
            >
              -
            </button>
            <button className="px-4 py-2 text-white font-bold">{items}</button>
            <button
              className="px-4 py-2 text-white hover:bg-gray-600"
              onClick={() => setItems(items + 1)}
            >
              +
            </button>
          </div>
          <div>
            <p className="text-sm">
              Only <span> {}</span> items left!
            </p>
            <p className="text-xs text-gray-300">Don’t miss it</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500">
            Add to Cart
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
