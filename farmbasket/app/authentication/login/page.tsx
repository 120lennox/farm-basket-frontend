"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ForgotPassword from "../forgotPassword/page";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false); // For ForgotPassword modal
  const router = useRouter();

  const validateEmail = (email) =>
    /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await fetch("https://farm-basket3.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.message.includes("email")) {
          setEmailError("Invalid email address.");
        } else if (data.message.includes("password")) {
          setPasswordError("Incorrect password.");
        } else {
          setEmailError("Login failed. Please check your credentials.");
        }
        return;
      }

      if (data.access_token)
        localStorage.setItem("authToken", data.access_token);
      router.push("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error during login:", error);
      setEmailError("Unable to log in. Please try again later.");
    }
  };

  const ErrorMessage = ({ message }) =>
    message && <p className="text-red-500 text-xs mt-1">{message}</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <header className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 text-white text-center p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Welcome to Farm Basket</h1>
          <p className="text-sm mt-2">
            Buy and sell fresh farm products. Join our community today for
            convenient, high-quality trading.
          </p>
          <div className="mt-4">
            <p className="text-xs">Don't have an account?</p>
            <Link
              href="/authentication/signUp"
              className="bg-white text-green-900 px-4 py-2 rounded-full inline-block mt-2 hover:bg-gray-100"
            >
              SIGN UP
            </Link>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            User Login
          </h2>
          <div>
            <input
              aria-label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-700"
              required
            />
            <ErrorMessage message={emailError} />
          </div>
          <div>
            <input
              aria-label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-700"
              required
            />
            <ErrorMessage message={passwordError} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show Password
            </label>
            <button
              type="button"
              className="text-green-700 hover:underline"
              onClick={() => setVisible(true)}
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Login
          </button>
        </form>
      </div>
      <ForgotPassword isVisible={visible} onClose={() => setVisible(false)} />
    </div>
  );
}
