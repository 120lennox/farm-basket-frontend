export default function NavBar() {
  return (
    <div className=" text-white">
      <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-4 px-4">
        <h1 className=" w-full text-3xl font-bold">
          FARM <span className=" text-[#00df9a]"> BUSKET</span>
        </h1>
        <ul className=" flex bg-slate-400 rounded-lg">
          <li className=" p-2"> Collections</li>
          <li className=" p-2"> Explore</li>
          <li className=" p-2"> Shops</li>
        </ul>
        <div className=" flex p-4">
          <h1 className=" p-2 ">Login</h1>
          <h1 className=" p-2">Register</h1>
        </div>
      </div>
    </div>
  );
}
