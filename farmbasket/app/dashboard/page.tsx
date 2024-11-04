import { BellIcon, ChatBubbleBottomCenterTextIcon, ChartBarIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
export default function dashboard(){
    return(
            <div className="flex">
      <aside className="w-64 h-screen bg-white shadow-md p-6 flex flex-col">

        <h1 className="text-2xl font-bold mb-6">shop name</h1>
         <div className="space-y-4">
          <button className="flex items-center space-x-2 h-16 text-lg text-gray-700 hover:text-black">
            <span>Notifications</span>
            <BellIcon className='w-6 h-6'/>
          </button>

          <button className="flex items-center h-16 space-x-2 text-lg text-gray-700 hover:text-black">
            <span>Messages</span>
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
          </button>

          <button className="flex items-center h-16 space-x-2 text-lg text-gray-700 hover:text-black">
            <span>Statistics</span>
            <ChartBarIcon className="w-6 h-6" />
          </button>

           <button className="flex items-center space-x-2 text-lg text-white bg-green-500 rounded-full px-4 py-2 mt-4 hover:bg-green-600">
            <span>Stock</span>
            <BuildingStorefrontIcon className="w-6 h-6" />       
          </button>
          </div>
        </aside>
        </div>
        
        
    );
}