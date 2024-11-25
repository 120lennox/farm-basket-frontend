'use client'

import "./globals.css";
import Navbar from "./components/landing/navbar";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const pathname = usePathname()
  const isDashboardRouter = pathname.startsWith('/dashboard')

return (
    <html lang="en">
      <body
        /**className={`${geistSans.variable} ${geistMono.variable} antialiased`}**/
        className="font-Poppins   dark:bg-yellow-50 dark:text-black"
      >

        <div>
          <div className="mx-8">
            { !isDashboardRouter && <Navbar />}
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}