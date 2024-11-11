import Link from "next/link"

export default function Sidebar(){
    return <div>
            <div className="text-white ">
                <div className="flex items-center justify-center  text-2xl font-bold mb-6 ">
                    Shop Name
                </div>
                {/* <div> 
                    <div className="flex items-center justify-center space-x-2 h-36 text-lg text-white">
                        <Link href="/notification">Notifications</Link>
                    </div>
                    <div className="flex items-center justify-center h-5 space-x-2 text-lg text-white">
                       <Link href="/messages">Messages</Link> 
                    </div>
                    <div className="flex items-center justify-center h-32 space-x-2 text-lg text-white">
                        <Link href="/statistics">Statistics</Link>
                    </div> 
                    <div className="flex items-center justify-center h-10 space-x-2 text-lg text-white ">
                    <Link href ="/stock">Stock</Link>
                </div>
            </div> */}
            </div>
    </div>
}