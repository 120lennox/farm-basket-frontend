"use client";
import { useState } from "react";

interface ForgotPasswordProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export default function ForgotPassword({
  isVisible = false,
  onClose = () => {},
}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isVisible) return null;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "https://farm-basket3.onrender.com/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const successData = await response.json();
        setSuccessMessage(successData.message);
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setError("Failed to send the request. Please check your connection.");
      console.error("server error", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] flex flex-col">
        <button className="text-xl place-self-end" onClick={onClose}>
          ×
        </button>

        <div>
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Reset Password
          </h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your email address below. A password reset link will be sent
            to the provided email.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm  font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              aria-label="Submit email for password reset"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
