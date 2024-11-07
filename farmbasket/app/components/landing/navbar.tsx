export default function NavBar() {
  return (
    <div className="text-white  ">
      <div className="flex justify-between items-center mx-auto h-24 max-w-[1240px] px-2">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-black">
            FARM <span className="text-[#00df9a]">BASKET</span>
          </h1>
        </div>
        <ul className="flex space-x-4 bg-slate-400 p-[10px] font-bold rounded-[45px] items-center">
          <li className="p-2 hover:text-[#00df9a] transition duration-100">
            Shops
          </li>
          <li className="p-2 hover:text-[#00df9a] transition duration-300">
            Explore
          </li>
          <li className="p-2 hover:text-[#00df9a] transition duration-300">
            Collections
          </li>
        </ul>
        <div className="flex space-x-4 p-4 font-bold text-black">
          <h1 className="p-2">Login</h1>
          <h1 className="p-2">Register</h1>
        </div>
      </div>
    </div>
  );
}
