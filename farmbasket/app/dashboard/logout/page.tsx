"use client"; // For Client-Side Rendering
import Link from "next/link";

export default function LogoutPage() {
  const handleLogout = () => {
    try {
      // Clear session or token (if applicable)
      localStorage.removeItem("authToken"); // Example: Clear localStorage
      sessionStorage.removeItem("userSession"); // Example: Clear sessionStorage

      // Optional: Clear cookies if you use them for auth
      // import Cookies from 'js-cookie';
      // Cookies.remove('authToken');

      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Large centered text */}
      <h1 className="text-black text-5xl font-bold mb-8">Finished Selling???</h1>
      
      {/* Logout button */}
      <Link href="/" onClick={handleLogout} passHref>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg">
          Logout
        </button>
      </Link>
    </div>
  );
}
