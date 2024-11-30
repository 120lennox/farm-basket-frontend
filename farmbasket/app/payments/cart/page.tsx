"use client";
export default function Cart() {
  return (
    <div className="bg-yellow-50 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Shopping Cart
        </h1>

        {/* Table Headers */}
        <div className="grid grid-cols-4 text-gray-600 font-semibold border-b pb-3 mb-3">
          <h2>ITEM</h2>
          <h2>QUANTITY</h2>
          <h2>PRICE</h2>
          <h2>TOTAL</h2>
        </div>

        {/* Cart Items */}
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center gap-4 text-gray-800 py-3 border-b"
          >
            <div className="flex items-center">
              <img
                src="/airtel.png"
                alt="item"
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <span className="ml-4">Mpunga</span>
            </div>
            <div className="text-center">
              <span>1</span>
            </div>
            <div className="text-center">
              <span>mk23000</span>
            </div>
            <div className="text-center">
              <span>mk23000</span>
            </div>
          </div>
        ))}

        {/* Total Section */}
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Total:</h2>
          <span className="text-xl font-bold text-green-700">mk69000</span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-300">
            Continue Shopping
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md shadow hover:bg-green-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
