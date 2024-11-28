export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
       {/*<div className="p-4 text-xl font-bold border-b border-gray-700">
          Admin Dashboard
        </div>*/}
        <div className="p-4">
          <p className="mb-4 text-gray-300"><strong>UserName</strong></p>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-700">
            Users
          </a>
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-700">
            Shops
          </a>
          <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-700">
            Log Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
      <div className="flex-container box-border rounded-lg w-100 p-4 flex flex-col h-screen bg-slate-300 ..">
      </div>
      </div>
    </div>
  );
}