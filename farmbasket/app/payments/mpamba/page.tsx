"use client";

import { useState } from "react";

export default function Airtel() {
  const [mobile, setMobile] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [error, setError] = useState<string>("");

  const validateInputs = (): boolean => {
    if (!mobile || !amount) {
      setError("Please enter both mobile number and amount.");
      return false;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (amount <= 0) {
      setError("Amount must be greater than zero.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validateInputs()) return;

    console.log("Mobile Number:", mobile);
    console.log("Amount:", amount);

    alert(`Payment of MWK ${amount} initiated for ${mobile}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg bg-white shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-CustomGreen-500">
          TNM MPAMBA
        </h2>
        {error && (
          <p className="text-sm text-red-600 mb-4 text-center">{error}</p>
        )}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Amount (MWK):
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || "")}
            placeholder="e.g., 1000"
            required
            className="w-full px-4 py-2  bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mobile Number:
          </label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="\d{10}"
            placeholder="e.g., 0897232255"
            required
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-CustomGreen-500 text-white font-semibold rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition duration-200"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
