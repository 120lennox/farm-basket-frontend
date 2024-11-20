import Link from "next/link"
export default function Sidebar(){
    return <div>
        <div className="mt-10">
            <div>
                Farm Basket
            </div>
            <div>
                <input type="text" />
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