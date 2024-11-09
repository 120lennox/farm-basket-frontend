export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-green-950 via-yellow-600 to-green-300 px-4">
      <h1 className="text-white  font-bold text-2xl mb-6">
        Create New Account
      </h1>

      <input
        aria-label="First Name"
        className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        type="text"
        placeholder="Enter your First Name"
      />
      <input
        aria-label="Last Name"
        className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        type="text"
        placeholder="Enter your Last Name"
      />
      <input
        aria-label="Email Address"
        className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        type="email"
        placeholder="Enter your Email"
      />
      <input
        aria-label="Password"
        className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        type="password"
        placeholder="Enter your Password"
      />
      <input
        aria-label="Confirm Password"
        className="text-white w-[350px] p-3 mt-3 border border-green-700 rounded-full bg-green-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        type="password"
        placeholder="Confirm your Password"
      />

      <button className="bg-green-700 text-white font-semibold rounded-full w-[350px] py-3 mt-5 hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
        Sign Up
      </button>

      <p className="text-sm text-white mt-4">
        Already have an account?{" "}
        <a href="Login" className="text-yellow-300 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}
