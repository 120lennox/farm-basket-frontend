"use client";
import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo-alone.png"
            alt="logo"
            className="w-24 h-24 object-contain"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
          Reset Account Password
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter a new password for{" "}
          <span className="font-semibold">daudelen@gmail.com</span>
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
