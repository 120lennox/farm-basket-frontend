import Link from "next/link"
export default function Sidebar(){
    return <div>
        <div className="mt-10 flex flex-col space-y-5">
            <div className="font-bold text-[30px]">
                Farm Basket
            </div>
            <div>
                <input type="text" className="bg-customBlue-800 bor" />
            </div>
            <div>
                <Link href="/orders">orders</Link>
            </div>
            <div>
                <Link href="/messages">Messages</Link>
            </div>
            <div>
                <Link href="/statistics">Statistics</Link>
            </div>
            <div>
                <Link href="/inventory">Inventory</Link>
            </div>
            <div>
                <Link href="/notifications">Notifications</Link>
            </div>
            <div>
                <Link href="/settings">Settings</Link>
            </div>
            <div>
                <Link href="/logout">Logout</Link>
            </div>
            
        </div>
    </div>
}