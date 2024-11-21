import React from "react";
import Footer from "../components/landing/footer";
import Sidebar from "./components/sidebar";

// dashboard layout
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}){
    return (
        <div className="min-h-[120vh] text-white bg-gradient-to-b from-customBlue-850 via-customBlue-800 to-customBlue-900 relative">
          <div className="mx-8">
            <div className="absolute left-8 top-0 h-full">
                <div className="flex flex-col">
                  <Sidebar />
                </div>
            </div>
            <div className="absolute left-[330px] top-6">
              <div className="bg-CustomWhite-200 w-[1000px] h-[600px] rounded-md">
                {children}
              </div>
            </div>
          </div>
        </div>

    //     <div className="min-h-[120vh] text-white bg-gradient-to-b from-customBlue-850 via-customBlue-800 to-customBlue-900 relative">
    //   <div className="relative min-h-[120vh] mx-8 flex">
    //     <div className="w-[280px] fixed">
    //       <Sidebar />
    //     </div>
    //     <div className="ml-[330px] py-6 flex-1">
    //       <div className="bg-CustomWhite-200 w-[1000px] h-[600px] rounded-md">
    //         {children}
    //       </div>
    //     </div>
    //   </div>
    // </div>
      )
}