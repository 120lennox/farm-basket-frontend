import React from "react";
import Footer from "../components/landing/footer";

// dashboard layout
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}){

    return (
        <div className="font-Poppins">
            <div className="bg-gradient-to-b from-customBlue-850 via-customBlue-800 to-customBlue-900">
                <div>
                
                </div>
                <div>
                    {children}
                </div>
            </div>

            <div className="absolute bottom-0 w-full">
            <Footer />
            </div>
        </div>
    );

}