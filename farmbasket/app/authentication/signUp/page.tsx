"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUp() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [location, setLocation] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setUserNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPassError("");
    setLocationError("");
    setServerMessage("");

    let isValid = true;

    if (!userName.trim()) {
      setUserNameError("Username is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (confirmPass !== password) {
      setConfirmPassError("Passwords do not match");
      isValid = false;
    }

    if (!location.trim()) {
      setLocationError("Location is required");
      isValid = false;
    }

    if (isValid) {
      const userData = { name: userName, email, password, location };

      try {
        const response = await fetch(
          "https://farm-basket3.onrender.com/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setServerMessage("Registration successful!");
          if (data.access_token) {
            localStorage.setItem("authToken", data.access_token);
          }
          router.push("/");
        } else {
          setServerMessage(`Error: ${data.message || "Failed to register"}`);
        }
      } catch (error) {
        console.error("Error in creating an account:", error);
        setServerMessage("Network error. Please try again later.");
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
        <div className="flex justify-center">
          <Image
            src="/Log.png"
            alt="Farm Basket Logo"
            width={100}
            height={50}
            className="object-contain  "
          />
        </div>
        <p className="text-gray-600 text-center">
          Welcome to <strong>Farm Basket</strong>, your gateway to fresh farm
          produce! Join us today and connect with the best in farm trading.
        </p>
        <h1 className="text-gray-800 text-2xl font-extrabold text-center">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            aria-label="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            type="text"
            value={userName}
            placeholder="Username"
          />
          {userNameError && (
            <p className="text-red-500 text-sm">{userNameError}</p>
          )}

          <input
            aria-label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            type="email"
            value={email}
            placeholder="Email"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <input
            aria-label="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            type="text"
            value={location}
            placeholder="Location"
          />
          {locationError && (
            <p className="text-red-500 text-sm">{locationError}</p>
          )}

          <input
            aria-label="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <input
            aria-label="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            type={showPassword ? "text" : "password"}
            value={confirmPass}
            placeholder="Confirm Password"
          />
          {confirmPassError && (
            <p className="text-red-500 text-sm">{confirmPassError}</p>
          )}

          <div className="flex items-center gap-2">
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="cursor-pointer"
            />
            <label
              htmlFor="showPassword"
              className="text-gray-600 cursor-pointer"
            >
              Show Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition"
          >
            Sign Up
          </button>
        </form>
        {serverMessage && (
          <p
            className={`mt-4 text-center font-medium ${
              serverMessage === "Registration successful!"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {serverMessage}
          </p>
        )}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/authentication/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
