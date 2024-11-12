import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function stock (){
    return(
        <div className="flex">
            <div className=" w-1/6">
               <Sidebar/>
            </div>
        <div className="flex flex-col w-5/6">
            <Header/>
            <div>Stock</div> 
        </div>
        </div>
    ); 
}