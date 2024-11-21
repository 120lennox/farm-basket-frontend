import Link from "next/link"
export default function Sidebar(){
    return <div>
        <div className="mt-10 flex flex-col space-y-10">
            <div className="font-bold text-[30px]">
                Farm Basket
            </div>
            <div>
                <input type="text" className="bg-customBlue-800 px-8 py-2 border-none ring-1 focus:ring-CustomGreen-500 focus:outline-none rounded-full" />
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/orders" className="">Orders</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/messages">Messages</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/statistics">Statistics</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/inventory">Inventory</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/notifications">Notifications</Link>
            </div>
            <div className="mt-8 flex flex-col space-y-7">
                <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                    <Link href="/settings">Settings</Link>
                </div>
                <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                    <Link href="/logout">Logout</Link>
                </div>
            </div>
            
        </div>
    </div>
}