"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CreateShopModal from "../modal_components/create_shop";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated interface to match the CreateShopModal's prop type
  interface ShopData {
    shopName: string;
    shopDescription: string;
    name?: string;
    address?: string;
    key?: string;
  }
  
  const handleCreateShop = (shopData: ShopData) => {
    // shop creation logic
    console.log('Shop created:', shopData);
    // You might want to add more logic here, like API calls
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");


      if (token !== null) {  // Only if token is something
        setIsAuthenticated(true);
        console.log("Auth Status: Logged in");
      } else {
        setIsAuthenticated(false);
        console.log("Auth Status: Not logged in");
      }
    };

    // Initial check
    checkAuth();

    // Listen for storage changes (in case user logs out in another tab)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    // Remove all auth-related session data
    sessionStorage.removeItem('authToekn');
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
    router.push('/authentication/login');
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link className="font-NovaScript text-[32px] font-semibold" href="/">
            Farm Basket 🧺
          </Link>
        </div>

        <div className="font-light">
          <div className="bg-white px-10 py-2 mt-2 rounded-full shadow-md">
            <div className="space-x-28 font-medium text-[16px]">
              <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/shops">Shops</Link>
              <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/collections">Collections</Link>
              <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/explore">Explore</Link>
            </div>
          </div>
        </div>

        <div className="">
          {!isAuthenticated ? (
            // Show Login/Register for non-authenticated users
            <div className="space-x-8 text-[16px] font-medium">
              <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/authentication/login">Login</Link>
              <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/authentication/signUp">Register</Link>
            </div>
          ) : (
            <div className="flex flex-row justify-between items-center space-x-16">
              <div><ShoppingBagIcon className="size-8 font-semibold" /></div>
              <div>
                <div className="mt-2 dropdown dropdown-left dropdown-bottom">
                  <div tabIndex={0} role="button" className="btn rounded-full">L</div>
                  <ul tabIndex={0} className="dropdown-content bg-white text-black menu rounded-box z-[1] w-52 p-2 mr-5 shadow">
                    <li>
                      <a onClick={() => setIsModalOpen(true)}>Create Shop</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                  <CreateShopModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onCreateShop={handleCreateShop}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}