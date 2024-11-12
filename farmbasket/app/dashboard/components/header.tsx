import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline";
export default function Header(){
     return <div className="flex  justify-center items-center w-full border-b border-black ">
       
          <div className="flex items-center justify-center  p-4 bg-white  border-r shadow-md relative z-10 w-full">
                <div className="flex space-x-4 bg-gray-300 rounded-full p-2">
            <div className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600">
           <Link href="/dashboard">Dashboard</Link>
           </div>
           <div className="px-4 py-2 text-black bg-gray-200 rounded-full hover:bg-gray-300">
                 <Link href="/website">Website</Link>
             </div>
            </div>
            <div className="absolute order-last right-4  flex object-center space-x-2">
          <UserCircleIcon className="w-8 h-8 text-black" /> 
            <div className="text-black text-lg">user</div>
          </div>
             
        </div>
    </div>

    
}