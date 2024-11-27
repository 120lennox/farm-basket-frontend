"use client";
import { fetchNotification } from "@/app/lib/data";
import React, { useState, useEffect } from "react";

interface Notification {
  id: number;
  notificationtext: string;
  timestamp: string;
}

export default function NotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]); // Initialize as an array
  const [visibleCount, setVisibleCount] = useState(5);
  const [error, setError] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchNotification();
        if (Array.isArray(result))
           {
          setNotifications(result); // Update notifications only if the result is valid
         } else {
          setError("");
        }
      } catch (error) {
        setError(`Error fetching notifications: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <h2 className="text-2xl text-black font-bold mb-4">Notifications</h2>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.slice(0, visibleCount).map((notification) => (
              <div
                key={notification.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-start"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    {notification.notificationtext}
                  </p>
                  <p className="text-xs text-gray-500">{notification.timestamp}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notifications to display.</p>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < notifications.length && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            >
              See Previous Notifications
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
