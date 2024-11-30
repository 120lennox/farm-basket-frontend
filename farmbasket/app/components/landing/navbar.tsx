"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CreateShopModal from "../modal_components/create_shop";
import axios from 'axios'


export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shopId, setShopId] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  interface ShopData {
    ownerid: number,
    shopid: number,
    shopName: string;
    shopDescription: string;
    name?: string;
    address?: string;
    key?: string;
  }
  
  const handleCreateShop = async (shopData: ShopData) => {
    setError(null)
    setIsLoading(true);

    try {
      const response = await axios.post('https://farm-basket3.onrender.com/shop/create', shopData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response.data)

      // Set the shopId from the response
      if (response.data && response.data.shopid) {
        setShopId(response.data.shopid);
        localStorage.setItem("shopId", response.data.shopid)

      }

      console.log("Shop Created", shopData)
      setIsModalOpen(false)
    } catch(error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Failed to create shop';
        setError(errorMessage);
        console.error('Shop creation error:', errorMessage);
      } else {
        setError('An unexpected error occurred');
        console.error('Unexpected error:', error);
      }
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      const existingShopId = localStorage.getItem("shopId");

      if (token !== null) {
        setIsAuthenticated(true);
        // If shopId exists in localStorage, set it in state
        if (existingShopId) {
          setShopId(parseInt(existingShopId));
        }
        console.log("Auth Status: Logged in");
      } else {
        setIsAuthenticated(false);
        setShopId(null);
        console.log("Auth Status: Not logged in");
      }
    };

    checkAuth();

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    localStorage.removeItem('shopId');
    setIsAuthenticated(false);
    setShopId(null);
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
                    {shopId ? (
                      <li>
                        <Link href="/dashboard">Dashboard</Link>
                      </li>
                    ) : (
                      <li>
                        <a onClick={() => setIsModalOpen(true)}>Create Shop</a>
                      </li>
                    )}
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



// "use client";
// import Link from "next/link";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { ShoppingBagIcon } from "@heroicons/react/24/outline";
// import CreateShopModal from "../modal_components/create_shop";
// import axios from 'axios'


// export default function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Updated interface to match the CreateShopModal's prop type
//   interface ShopData {
//     ownerid: number,
//     shopid: number,
//     shopName: string;
//     shopDescription: string;
//     name?: string;
//     address?: string;
//     key?: string;
//   }
  
//   const handleCreateShop = async (shopData: ShopData) => {
//     // reset previous errors 
//     setError(null)
//     setIsLoading(true);

//     // send data

//     try{
//       const response = await axios.post('https://farm-basket3.onrender.com/shop/create', shopData, {
//         headers: {
//           'conntent-Type': 'application/json',
//         }
//       });

//       console.log("Shop Created", shopData)
//       setIsModalOpen(false)
//     }catch(error){
//       if (axios.isAxiosError(error)){
//         const errorMessage = error.response?.data?.message || 'Failed to create shop';
//         setError(errorMessage);
//         console.error('Shop creation error:', errorMessage);
//       }else{
//         setError('An unexpected error occurred');
//         console.error('Unexpected error:', error);
//       }
//     }finally{
//       setIsLoading(false)
//     }
   
//   };

//   useEffect(() => {
//     // Check authentication status when component mounts
//     const checkAuth = () => {
//       const token = localStorage.getItem("authToken");


//       if (token !== null) {  // Only if token is something
//         setIsAuthenticated(true);
//         console.log("Auth Status: Logged in");
//       } else {
//         setIsAuthenticated(false);
//         console.log("Auth Status: Not logged in");
//       }
//     };

//     // Initial check
//     checkAuth();

//     // Listen for storage changes (in case user logs out in another tab)
//     const handleStorageChange = () => {
//       checkAuth();
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     // Remove all auth-related session data
//     sessionStorage.removeItem('authToekn');
//     sessionStorage.removeItem('user');
//     setIsAuthenticated(false);
//     router.push('/authentication/login');
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <div>
//           <Link className="font-NovaScript text-[32px] font-semibold" href="/">
//             Farm Basket 🧺
//           </Link>
//         </div>

//         <div className="font-light">
//           <div className="bg-white px-10 py-2 mt-2 rounded-full shadow-md">
//             <div className="space-x-28 font-medium text-[16px]">
//               <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/shops">Shops</Link>
//               <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/collections">Collections</Link>
//               <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/explore">Explore</Link>
//             </div>
//           </div>
//         </div>

//         <div className="">
//           {!isAuthenticated ? (
//             // Show Login/Register for non-authenticated users
//             <div className="space-x-8 text-[16px] font-medium">
//               <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/authentication/login">Login</Link>
//               <Link className="font-light hover:text-CustomGreen-600 transition-all ease-in-out" href="/authentication/signUp">Register</Link>
//             </div>
//           ) : (
//             <div className="flex flex-row justify-between items-center space-x-16">
//               <div><ShoppingBagIcon className="size-8 font-semibold" /></div>
//               <div>
//                 <div className="mt-2 dropdown dropdown-left dropdown-bottom">
//                   <div tabIndex={0} role="button" className="btn rounded-full">L</div>
//                   <ul tabIndex={0} className="dropdown-content bg-white text-black menu rounded-box z-[1] w-52 p-2 mr-5 shadow">
//                     <li>
//                       <a onClick={() => setIsModalOpen(true)}>Create Shop</a>
//                     </li>
//                     <li>
//                       <a onClick={handleLogout}>Logout</a>
//                     </li>
//                   </ul>
//                   <CreateShopModal 
//                     isOpen={isModalOpen}
//                     onClose={() => setIsModalOpen(false)}
//                     onCreateShop={handleCreateShop}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }