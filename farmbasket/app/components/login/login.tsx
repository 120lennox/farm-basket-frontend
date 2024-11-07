export default function Login() {
  return (
    <div className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 flex justify-center items-center h-screen">
      <div className="bg-white h-[600px] w-[500px] border shadow-lg rounded-lg">
        <header className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-900 h-[300px] text-center text-white font-serif flex flex-col justify-center items-center p-6">
          <h1 className="font-extrabold text-[30px]">Welcome to Farm Basket</h1>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laudantium velit, pariatur commodi necessitatibus perspiciatis
            labore doloremque tenetur vel delectus nulla obcaecati ipsam, illum
            at harum, sed eos quam. Quia.
          </p>
        </header>
        <main className="flex flex-col items-center gap-4 p-6">
          <h2 className="text-center font-extrabold text-lg mt-2">
            User Login
          </h2>
          <input
            aria-label="Email Address"
            className="text-white w-[350px] p-2 mt-3 border rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            aria-label="Password"
            className="text-white w-[350px] p-2 mt-3 border rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            type="password"
            placeholder="Password"
          />
        </main>
      </div>
    </div>
  );
}
