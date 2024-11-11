"use client";
import { useState } from "react";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // State for individual field errors
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Reset errors
    setUserNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPassError("");

    let isValid = true;

    // Validate userName
    if (!userName) {
      setUserNameError("Username is required");
      isValid = false;
    }

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    // Validate confirmPass
    if (confirmPass !== password) {
      setConfirmPassError("Passwords do not match");
      isValid = false;
    }

    if (isValid) {
      alert(`User: ${userName}, Email: ${email}`);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-green-950 via-yellow-600 to-green-300 px-4">
      <h1 className="text-white text-[30px] font-bold text-2xl mb-6">
        Create New Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
          <input
            aria-label="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="text"
            value={userName}
            placeholder="Enter user name"
          />
          {userNameError && <p className="text-red-900">{userNameError}</p>}

          <input
            aria-label="Email Address"
            className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
          {emailError && <p className="text-red-900">{emailError}</p>}

          <input
            aria-label="Password"
            className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          {passwordError && <p className="text-red-900">{passwordError}</p>}

          <input
            aria-label="Confirm Password"
            className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirm your Password"
          />
          {confirmPassError && (
            <p className="text-red-900">{confirmPassError}</p>
          )}

          <button
            type="submit"
            className="bg-green-700 text-white font-semibold rounded-full w-[350px] py-3 mt-5 hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-sm text-white mt-4">
        Already have an account?{" "}
        <a href="Login" className="text-yellow-300 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}
