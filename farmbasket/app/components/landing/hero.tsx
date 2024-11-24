export default function Hero() {
  return (
      <div>
        <div>
          <div>
            <div>
              <div className="mt-10">
                <h1 className="text-7xl text-CustomGreen-600">
                  Farm Basket
                </h1>
              </div>
              <div className="mt-10 w-[950px]">
                <p className="text-3xl font-light">
                Connecting Farmers, Feeding Communities
                Bridging Local Agriculture with Global Markets
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-CustomGreen-600 p-3 rounded-2xl text-white hover:bg-green-400 transition-all ease-in">
                Get started
              </button>
            </div>
          </div>
          <div className="mt-28 mb-5">
            <div className="text-4xl text-CustomGreen-600">
              What's Trending?
            </div>
          </div>
          <div className="flex justify-between items-center mt-14">
            <div className="bg-gray-400 h-80 w-72 rounded-md" >

            </div>
            <div className="bg-gray-400 h-80 w-72 rounded-md" >
              
            </div>
            <div className="bg-gray-400 h-80 w-72 rounded-md" >
              
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center flex-row space-x-2">
            <div className="bg-gray-400 rounded-full h-4 w-4" >

            </div>
            <div className="bg-gray-400 rounded-full h-4 w-4" >

            </div>
            <div className="bg-gray-400 rounded-full h-4 w-4" >

            </div>
          </div>
        </div>
      </div>
);
}