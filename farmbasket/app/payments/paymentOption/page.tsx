"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleOptionChange = (paymentMethod: string): void => {
    setSelectedPayment(paymentMethod);
  };

  const handleSubmit = (): void => {
    if (!selectedPayment) {
      setError("Please select a payment method.");
      return;
    }

    switch (selectedPayment) {
      case "Airtel":
        router.push("/payments/airtel");
        break;
      case "Mpamba":
        router.push("/payments/mpamba");
        break;
      case "Bank":
        router.push("/payments/bank");
        break;
      default:
        alert("Invalid payment method selected.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-center font-bold text-lg mb-6">
          Account/Payment Methods
        </h2>
        <div className="text-center text-green-600 font-bold text-lg mb-6">
          Choose your Payment Method
        </div>

        <div className="space-y-4">
          {/* Airtel Money Option */}
          <label
            className={`flex items-center justify-between border rounded-2xl px-4 py-3 cursor-pointer hover:border-green-500 transition ${
              selectedPayment === "Airtel" ? "border-green-500" : ""
            }`}
          >
            <div className="flex items-center">
              <Image
                src="/airtel.png"
                alt="AIRTEL"
                width={150}
                height={100}
                className="w-8 h-8 mr-3"
              />
              <span className="font-medium text-gray-800">
                Via Airtel Money
              </span>
            </div>
            <input
              type="radio"
              name="payment"
              value="Airtel"
              checked={selectedPayment === "Airtel"}
              onChange={() => handleOptionChange("Airtel")}
              className="hidden"
            />
            <span
              className={`w-6 h-6 flex items-center justify-center border ${
                selectedPayment === "Airtel"
                  ? "border-green-500 text-green-500"
                  : "border-gray-300"
              } rounded-full`}
            >
              {selectedPayment === "Airtel" && "✓"}
            </span>
          </label>

          {/* TNM Mpamba Option */}
          <label
            className={`flex items-center justify-between border rounded-2xl px-4 py-3 cursor-pointer hover:border-green-500 transition ${
              selectedPayment === "Mpamba" ? "border-green-500" : ""
            }`}
          >
            <div className="flex items-center">
              <Image
                src="/mpamba.png"
                alt="TNM"
                width={100}
                height={50}
                className="w-8 h-8 mr-3"
              />
              <span className="font-medium text-gray-800">Via TNM Mpamba</span>
            </div>
            <input
              type="radio"
              name="payment"
              value="Mpamba"
              checked={selectedPayment === "Mpamba"}
              onChange={() => handleOptionChange("Mpamba")}
              className="hidden"
            />
            <span
              className={`w-6 h-6 flex items-center justify-center border ${
                selectedPayment === "Mpamba"
                  ? "border-green-500 text-green-500"
                  : "border-gray-300"
              } rounded-full`}
            >
              {selectedPayment === "Mpamba" && "✓"}
            </span>
          </label>

          {/* Bank Option */}
          <label
            className={`flex items-center justify-between border rounded-2xl px-4 py-3 cursor-pointer hover:border-green-500 transition ${
              selectedPayment === "Bank" ? "border-green-500" : ""
            }`}
          >
            <div className="flex items-center">
              <Image
                src="/bank.png"
                alt="VISA"
                width={100}
                height={50}
                className="w-8 h-8 mr-3"
              />
              <span className="font-medium text-gray-800">Via Bank</span>
            </div>
            <input
              type="radio"
              name="payment"
              value="Bank"
              checked={selectedPayment === "Bank"}
              onChange={() => handleOptionChange("Bank")}
              className="hidden"
            />
            <span
              className={`w-6 h-6 flex items-center justify-center border ${
                selectedPayment === "Bank"
                  ? "border-green-500 text-green-500"
                  : "border-gray-300"
              } rounded-full`}
            >
              {selectedPayment === "Bank" && "✓"}
            </span>
          </label>
        </div>
        <p className=" text-sm text-red-600 text-center p-1">{error}</p>
        <p className="mt-4 text-center text-sm text-gray-800">
          Powered by Pay Changu
        </p>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
