"use client";
import { useState } from "react";
export default function Checkout() {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex justify-evenly items-center p-4">
      {/* Image Section */}
      <div>
        <h1>will have the image here</h1>
      </div>

      {/* Product Details Section */}
      <div className="bg-yellow-900 h-screen p-6 rounded-lg text-white">
        <h1 className="font-extrabold text-xl mb-2">Water Pump</h1>
        <p className="w-[200px] mb-4">
          Powerful and energy-efficient water pump is perfect for a variety of
          residential and light commercial applications.
        </p>
        <br className=" boader boader-green" />

        {/* Star Rating Section */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              onClick={() => handleRating(index)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={index < rating ? "gold" : "gray"} // Highlight selected stars
              className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-sm mt-2">
          {rating > 0
            ? `You rated this product ${rating} out of 5 stars.`
            : "Click on the stars to rate this product."}
        </p>
        <div className="flex justify-between">
          <h1 className=" font-bold text-lg">
            <span className=" text-sm align-super">mk</span>550,00
          </h1>
          <h2>save</h2>
          <h1 className=" font-bold text-lg">
            <span className=" text-sm align-super">mk</span>60,00
          </h1>
        </div>
      </div>
    </div>
  );
}
