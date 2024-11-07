import { BellIcon, ChatBubbleBottomCenterTextIcon, ChartBarIcon, BuildingStorefrontIcon, UserCircleIcon } from '@heroicons/react/24/outline';
export default function dashboard(){
    return(
            <div className="flex">
      <aside className="w-64 h-screen bg-white shadow-md p-6 flex flex-col border-r border-black">

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

         <main className="flex-1">
        <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-black">
          <div className="text-gray-700">
            <span className="text-3xl font-bold">25</span>
            <span className="ml-2">orders</span>
            <div className="text-sm text-gray-500">Last 7 days</div>
          </div>

           <div className="  mx-auto space-x-2 bg-gray-300 rounded-full py-1 w-55">
            <button className="px-2 py-1 text-white bg-green-500 rounded-full hover:bg-green-600">Dashboard</button>
            <button className="text-black text-bold ">Website</button>
          </div>

          
          <div className="flex items-center space-x-2">
          <UserCircleIcon className="w-8 h-8 text-gray-400" /> 
            <span className="text-gray-700">user</span>
          </div>
        </header>
        </main>
        </div>
        );
      }
         
        
        
    
