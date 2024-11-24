
export default function AIRTEL() {
    return (
      <div className="flex items-center rounded-2xl justify-center min-h-screen ">
        <form
          action="/api/process-payment"
          method="post"
          className="p-6 rounded-lg bg-red-500 shadow-md w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">AIRTEL MONEY</h2>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="1"
              placeholder="Enter amount"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              pattern="[1-9]{10}"
              placeholder="Enter mobile number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Pay Now
          </button>
        </form>
      </div>
    );
  }


