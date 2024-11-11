import Link from "next/link"
import { BellIcon,ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"         

export default function Sidebar(){
    return <div>
            <div className="text-black ">
                <div className="flex items-center justify-center  text-2xl font-bold mb-6 ">
                    Shop Name
                </div>
                <div> 
                    <div className="flex items-center justify-center space-x-2 h-36 text-lg text-black">
                        <Link href="/dashboard/notification">Notifications</Link>
                        <BellIcon className='w-6 h-6'/>
                    </div>
                    <div className="flex items-center justify-center h-5 space-x-2 text-lg text-black">
                       <Link href="/messages">Messages</Link>
                       <ChatBubbleBottomCenterTextIcon className="w-6 h-6" /> 
                    </div>
                <div className="flex items-center justify-center h-32 space-x-2 text-lg text-black">
                        <Link href="/statistics">Statistics</Link>
                    </div> 
                    <div className="flex items-center justify-center h-10 space-x-2 text-lg text-black ">
                    <Link href ="/stock">Stock</Link>
                </div>
                <div className="flex item-center justify-center text-black">
                    <Link href="/settings">Settings</Link>
                </div>
            </div> 
            </div>
    </div>
}