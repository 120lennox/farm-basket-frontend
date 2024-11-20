import React from "react";
import Footer from "../components/landing/footer";
import Sidebar from "./components/sidebar";

// dashboard layout
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}){
    return <div>
        <div className="bg-gradient-to-b from-customBlue-850 via-customBlue-800 to-customBlue-900">
            <div>
                <div>
                    <Sidebar />
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
}