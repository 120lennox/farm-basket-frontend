import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in by looking for token in session (local storage)
    const token = localStorage.getItem('token'); // or however you store your auth token
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link className="font-NovaScript text-[36px] font-semibold" href="/">
            Farm Basket 🧺
          </Link>
        </div>
        
        <div>
          <div className="bg-white px-10 py-2 mt-2 rounded-full shadow-md">
            <div className="space-x-28 font-medium text-[19px]">
              <Link href="/shops">Shops</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/explore">Explore</Link>
            </div>
          </div>
        </div>
        
        <div className="">
          {!isAuthenticated ? (
            // Show Login/Register for non-authenticated users
            <div className="space-x-8 text-[19px] font-medium">
              <Link href="/authentication/login">Login</Link>
              <Link href="/authentication/signUp">Register</Link>
            </div>
          ) : (
            // Show user menu for authenticated users
            <div className="space-x-8 text-[19px] font-medium">
              <Link href="/dashboard">Dashboard</Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('token'); // Remove auth token
                  setIsAuthenticated(false); // Update state
                  // Add any additional logout logic here
                }}
                className="hover:text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}