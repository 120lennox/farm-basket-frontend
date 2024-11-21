'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import NavLink from "./navLink"


export default function Sidebar(){
    const pathname = usePathname()
    return <div>
        <div className="mt-10 flex flex-col space-y-10">
            <div className="font-bold text-[30px]">
                Farm Basket
            </div>
            <div>
                <input type="text" className="bg-customBlue-800 px-8 py-2 border-none ring-1 focus:ring-CustomGreen-500 focus:outline-none rounded-full" />
            </div>
            <div className={`hover:bg-CustomGreen-500 py-3 px-1 rounded-md`}>
                <Link href="/dashboard/orders" className="">Orders</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/dashboard/messages">Messages</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/dashboard/statistics">Statistics</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/dashboard/inventory">Inventory</Link>
            </div>
            <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                <Link href="/dashboard/notification">Notifications</Link>
            </div>
            <div className="mt-8 flex flex-col space-y-7">
                <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                    <Link href="/dashboard/settings">Settings</Link>
                </div>
                <div className="hover:bg-CustomGreen-500 py-3 px-1 rounded-md">
                    <Link href="/dashboard/logout">Logout</Link>
                </div>
            </div>
            
        </div>
    </div>
}