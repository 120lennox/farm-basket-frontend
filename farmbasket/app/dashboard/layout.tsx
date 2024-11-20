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
        <div className="min-h-screen text-white bg-gradient-to-b from-customBlue-850 via-customBlue-800 to-customBlue-900 relative">
          <div className="mx-8">
            <div className="absolute left-8 top-0 h-full">
                <Sidebar />
            </div>
            <div className="pl-[sidebar-width]">
                {children}
            </div>
          </div>
        </div>
      )
}