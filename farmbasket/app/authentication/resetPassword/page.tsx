"use client";
import { useState } from "react";
import Image from "next/image";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <Image
            src="/Log.png"
            alt="logo"
            width={200}
            height={50}
            className="w-35 h-35 object-cover "
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
          Reset Account Password
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter a new password for{" "}
          <span className="font-semibold">daudelen@gmail.com</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-4 h-4 text-blue-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-600">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
