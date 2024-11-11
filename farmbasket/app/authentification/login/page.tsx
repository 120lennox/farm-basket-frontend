"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setEmail("");
    setPassword("");
    alert("Login successful!");
  }

  return (
    <div className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 flex justify-center items-center h-screen">
      <div className="bg-white h-[650px] w-[500px] border shadow-lg rounded-lg">
        <header className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 h-[300px] text-center text-white font-serif flex flex-col justify-center items-center p-6">
          <h1 className="font-extrabold text-[30px]">Welcome to Farm Basket</h1>
          <p className="mt-4 text-sm px-4">
            Welcome to Farm Basket, the best place to buy and sell fresh farm
            products. Join our community today and experience convenient,
            high-quality farm trading.
          </p>
          <div className="mt-6">
            <p className="text-xs">Don't have an account? Create one below.</p>
            <Link
              href="/authentification/signUp"
              className="bg-green-900 text-white rounded-full px-4 py-2 mt-4 hover:bg-green-700 focus:outline-none"
            >
              SIGN UP
            </Link>
          </div>
        </header>
        <form
          action="https://farm-basket3.onrender.com/auth/login"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 p-6"
        >
          <h1 className="text-center font-bold text-green-950 text-lg mt-2">
            User Login
          </h1>

          <input
            aria-label="Email Address"
            className="text-white w-[350px] p-2 mt-3 border rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}

          <input
            aria-label="Password"
            className="text-white w-[350px] p-2 mt-3 border rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}

          <div className="flex justify-between w-[350px] text-xs mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <Link
              href="/authentification/forgotPass"
              className="text-green-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-green-800 text-white px-3 font-bold py-1 rounded-[5px] hover:bg-green-950"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
