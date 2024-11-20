"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function SignUp() {
  const router = useRouter(); // Initialize router

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [location, setLocation] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setUserNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPassError("");
    setLocationError("");
    setServerMessage("");

    let isValid = true;

    if (!userName) {
      setUserNameError("Username is required");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!password) {
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

    if (!location) {
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

      
        }

        //once registration is successfull
        if (response.ok) {
          setServerMessage("Registration successful!");
          //will be string the token to local storage 
        if (data.token) {
            localStorage.setItem("authToken", data.token);
          }

          router.push("/"); // fo to this page 
        } else {
          setServerMessage(`Error: ${data.message || "Failed to register"}`);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setServerMessage(error.response.data.message);
        }
        console.error("Error in creating an Acount", error);
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <div className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 h-[550px] rounded-[25px] text-center shadow-md text-white font-serif flex flex-col justify-center items-center p-6">
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
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              className="text-white w-[350px] p-3 mt-3 border border-green-900 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            {locationError && <p className="text-red-900">{locationError}</p>}

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

            {/* Display server response message */}
            {serverMessage && (
              <p
                className={`mt-3 ${
                  serverMessage === "Registration successful!"
                    ? "text-green-700"
                    : "text-red-900"
                }`}
              >
                {serverMessage}
              </p>
            )}
          </div>
        </form>
        <p className="text-sm text-white mt-4">
          Already have an account?{" "}
          <Link
            href="/authentication/login"
            className="text-yellow-300 hover:underline font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
