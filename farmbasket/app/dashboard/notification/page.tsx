"use client";

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import React, { useState } from "react";


interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

const sampleNotifications: Notification[] = [
  { id: 1, message: "New comment on 'Tractor'", timestamp: "2024-11-21 10:00 AM" },
  { id: 2, message: "5-star rating on 'Glyphosate'", timestamp: "2024-11-21 09:45 AM" },
  { id: 3, message: "Order placed for 'Wheat'", timestamp: "2024-11-21 09:30 AM" },
  { id: 4, message: "User inquiry about 'Plough'", timestamp: "2024-11-21 09:15 AM" },
  { id: 5, message: "2-star rating on 'Neem Oil'", timestamp: "2024-11-21 09:00 AM" },
  { id: 6, message: "3-star rating on 'Rice'", timestamp: "2024-11-21 08:45 AM" },
  { id: 7, message: "User liked 'Seeder'", timestamp: "2024-11-21 08:30 AM" },
];

export default function NotificationPage() {
  const [visibleCount, setVisibleCount] = useState(5);

  
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="flex h-screen">
      
      <div className="w-1/6">
        <Sidebar />
      </div>

      
      <div className="flex flex-col w-5/6">
        <Header />
        <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>

          
          <div className="space-y-4">
            {sampleNotifications.slice(0, visibleCount).map((notification) => (
              <div
                key={notification.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-start"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          
          {visibleCount < sampleNotifications.length && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-500"
              >
                See Previous Notifications
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
