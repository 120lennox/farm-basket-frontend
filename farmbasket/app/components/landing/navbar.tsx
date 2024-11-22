// import Link from "next/link";
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   useEffect(() => {
//     // Check if user is logged in by looking for token in session (local storage)
//     // const token = localStorage.getItem('token');

//     // for demo purposes we're getting a message instead of token
//     const message = sessionStorage.getItem('message');
//     console.log("Token_message: ", message)
//      // or however you store your auth token
//     setIsAuthenticated(!!message);
//     console.log("Token: ", message)
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <div>
//           <Link className="font-NovaScript text-[36px] font-semibold" href="/">
//             Farm Basket 🧺
//           </Link>
//         </div>
        
//         <div>
//           <div className="bg-white px-10 py-2 mt-2 rounded-full shadow-md">
//             <div className="space-x-28 font-medium text-[19px]">
//               <Link href="/shops">Shops</Link>
//               <Link href="/collections">Collections</Link>
//               <Link href="/explore">Explore</Link>
//             </div>
//           </div>
//         </div>
        
//         <div className="">
//           {!isAuthenticated ? (
//             // Show Login/Register for non-authenticated users
//             <div className="space-x-8 text-[19px] font-medium">
//               <Link href="/authentication/login">Login</Link>
//               <Link href="/authentication/signUp">Register</Link>
//             </div>
//           ) : (
//             // Show user menu for authenticated users
//             <div className="space-x-8 text-[19px] font-medium">
//               <Link href="/dashboard">Dashboard</Link>
//               <button 
//                 onClick={() => {
//                   sessionStorage.removeItem('token'); // Remove auth token
//                   setIsAuthenticated(false); // Update state
//                   // Add any additional logout logic here
//                 }}
//                 className="hover:text-red-500"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";



export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   // Check authentication status when component mounts
  //   const checkAuth = () => {
  //     const message = sessionStorage.getItem('message');
  //     console.log("Message:", message)
  //     console.log(isAuthenticated)
  //     setIsAuthenticated(!!message);
  //     console.log("Auth Status:", !!message);
  //     console.log(isAuthenticated)
  //   };

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = () => {
      const message = sessionStorage.getItem('message');
      if (message === "succesfully logged in") {  // Only authenticate if message matches
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
    sessionStorage.removeItem('message');
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
    router.push('/authentication/login');
  };

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
            // <div className="space-x-8 text-[19px] font-medium">
            //   <Link href="/dashboard">Dashboard</Link>
            //   <button
            //     onClick={handleLogout}
            //     className="hover:text-red-500"
            //   >
            //     Logout
            //   </button>
            // </div>
            <div>
              <div> <ShoppingBagIcon className="size-5 font-semibold" /></div>
              <div>{/* items here */}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



