import { BellIcon, ChatBubbleBottomCenterTextIcon, ChartBarIcon, BuildingStorefrontIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Sidebar from './components/sidebar';
 import Header from './components/header';
export default function dashboard(){
    return <div>
            
              <div className="flex ">
                  <div className="bg-white h-screen w-1/6">
                    <div className="mx-4 mt-5">
                     <Sidebar />
                    </div>
                  </div>
                   <div className="flex-1 relative">
                        <Header/>
      
                          
                        </div>
                      </div>
                      </div> 
                      
                  
          
    
    
      }
         
        
        
    
