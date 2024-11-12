import Sidebar from "../components/sidebar";
import Header from "../components/header";
export default function notification(){
    return <div className="flex ">
        <div className=" w-1/6">
        <Sidebar/>
        </div>
        <div className="flex flex-col w-5/6">
            <Header/>
         <div>Notification</div> 
        </div>
    </div>
}