"use client";

import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
  const [shops, setShops] = useState([
    { id: 1, name: "Shop A" },
    { id: 2, name: "Shop B" },
  ]);

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white flex flex-col p-5">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-gray-700 text-gray-300"
          />
        </div>
        <ul>
          <li
            className={`cursor-pointer p-2 mb-2 rounded ${
              activeTab === "users" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 rounded ${
              activeTab === "shops" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("shops")}
          >
            Shops
          </li>
        </ul>
        <button className="mt-auto bg-red-600 p-2 rounded">Log Out</button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-5">
        {activeTab === "users" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex justify-between items-center p-2 mb-2 bg-white shadow rounded"
                >
                  <span>{user.name}</span>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "shops" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Shops</h2>
            <ul>
              {shops.map((shop) => (
                <li key={shop.id} className="p-2 mb-2 bg-white shadow rounded">
                  {shop.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
