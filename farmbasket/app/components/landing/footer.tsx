export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center  px-4 py-6 bg-[#050e02] text-white">
      <div className="flex flex-col items-start mb-6 md:mb-0">
        <h1 className="font-bold text-[24px] mb-2">
          FARM <span className="text-[#00df9a]">BASKET</span>
        </h1>
        <button className="bg-green-400 text-white p-3 rounded-full hover:bg-green-500 transition duration-300">
          Download
        </button>
      </div>

      <div className="flex space-x-8">
        <ul className="flex flex-col items-center">
          <li className="font-bold text-[20px] border-b ">What We Do</li>
          <li className="py-1 pt-3 hover:text-[#00df9a] transition duration-300">
            Features
          </li>
          <li className="py-1  hover:text-[#00df9a] transition duration-300">
            Security
          </li>
          <li className="py-1 hover:text-[#00df9a] transition duration-300">
            Markets
          </li>
        </ul>

        <ul className="flex flex-col items-center">
          <li className="font-bold text-[20px] border-b ">Who We Are</li>
          <li className="py-1 pt-3 hover:text-[#00df9a] transition duration-300">
            About Us
          </li>
          <li className="py-1 hover:text-[#00df9a] transition duration-300">
            Our Team
          </li>
          <li className="py-1 hover:text-[#00df9a] transition duration-300">
            Privacy Policy
          </li>
        </ul>

        <ul className="flex flex-col items-center">
          <li className="font-bold text-[20px] border-b ">Need Help?</li>
          <li className="py-1 pt-3 hover:text-[#00df9a] transition duration-300">
            Contact Us
          </li>
          <li className="py-1 hover:text-[#00df9a] transition duration-300">
            Help Center
          </li>
          <li className="py-1 hover:text-[#00df9a] transition duration-300">
            Security Tips
          </li>
        </ul>
      </div>
    </div>
  );
}
