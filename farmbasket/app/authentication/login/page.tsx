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
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const router = useRouter();

  function validateEmail(email) {
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e) {
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
        headers: {
          "Content-Type": "application/json",
        },
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

      // Save token to localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      router.push("/"); // Redirect to landing page on successful login
      setEmail("");
      setPassword("");
    } catch (error) {
      setEmailError("The email you entered does not belong to any account.");
      console.error("Error during login:", error);
    }
  }

  return (
    <frameElement>
      <div className="rounded-lg shadow-lg flex justify-center items-center h-screen">
        <div className="bg-white h-[650px] w-[500px] border shadow-lg rounded-lg">
          <header className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 h-[300px] text-center text-white font-serif flex flex-col justify-center items-center p-6">
            <h1 className="font-extrabold text-[30px]">
              Welcome to Farm Basket
            </h1>
            <p className="mt-4 text-sm px-4">
              Welcome to Farm Basket, the best place to buy and sell fresh farm
              products. Join our community today and experience convenient,
              high-quality farm trading.
            </p>
            <div className="mt-6">
              <p className="text-xs">
                Don't have an account? Create one below.
              </p>
              <div className="mt-3">
                <Link
                  href="/authentification/signUp"
                  className="bg-green-900 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none"
                >
                  SIGN UP
                </Link>
              </div>
            </div>
          </header>
          <form
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
              required
            />
            {emailError && <p className="text-red-600 text-xs">{emailError}</p>}

            <input
              aria-label="Password"
              className="text-white w-[350px] p-2 mt-3 border rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
              type={showPassword ? "text" : "password"} // select the input type to use
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}

            <div className="flex items-center w-[350px] text-xs mt-2">
              <input
                type="checkbox"
                id="showPassword"
                className="mr-2"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="showPassword" className="text-gray-700">
                Show Password
              </label>
            </div>

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
      <ForgotPassword />
    </frameElement>
  );
}
