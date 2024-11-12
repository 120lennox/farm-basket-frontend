import Header from "../components/header"
import Sidebar from "../components/sidebar"

export default function statistics(){
    let number = 25;
    return <div className="flex">
         <div className=" w-1/6">
        <Sidebar/>
        </div>
        <div className="flex flex-col w-5/6">
            <Header/>
        <div>Statistics ${number}</div> 
        </div>
    </div>
}