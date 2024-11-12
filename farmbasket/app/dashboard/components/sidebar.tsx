import Link from "next/link"
import { BellIcon,ChatBubbleBottomCenterTextIcon,ChartBarIcon,BuildingStorefrontIcon,CogIcon } from "@heroicons/react/24/outline"         

export default function Sidebar(){
    return <div>
            <div className="text-black h-screen border-r border-black ">
                <div className="flex items-center justify-center  text-2xl font-bold mb-6 ">
                    Shop Name
                </div>
                <div> 
                    <div className="flex items-center justify-center space-x-2 h-36 text-lg text-black">
                        <Link href="/dashboard/notification">Notifications</Link>
                        <BellIcon className='w-6 h-6'/>
                    </div>
                    <div className="flex items-center justify-center h-5 space-x-2 text-lg text-black">
                       <Link href="/dashboard/messages">Messages</Link>
                       <ChatBubbleBottomCenterTextIcon className="w-6 h-6" /> 
                    </div>
                <div className="flex items-center justify-center h-32 space-x-2 text-lg text-black">
                        <Link href="/dashboard/statistics">Statistics</Link>
                        <ChartBarIcon className="w-6 h-6" />
                    </div> 
                    <div className="flex items-center justify-center h-10 space-x-2 text-lg text-black ">
                    <Link href ="/dashboard/stock">Stock</Link>
                    <BuildingStorefrontIcon className="w-6 h-6" />       
                </div>
                <div className="flex items-center justify-center space-x-2 text-lg text-black h-89 p-12"> 
                    <Link href="/dashboard/settings">Settings</Link>
                    <CogIcon className="w-10 h-10" />
                </div>
            </div> 
            </div>
    </div>
}