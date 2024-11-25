import Image from "next/image";

  // pages/payment.js
  export default function Payment() {
    return (
      <div className="flex items-center  w-70 justify-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-center items-center font-bold text-lg mb-6">
            Account/Payment Methods
          </h2>
          <div className="text-center items-center text-green-600 font-bold text-lg mb-6">
            Choose your Payment Method
          </div>
  
          <div className="space-y-4">
            {/* Airtel Option */}
            <label className="flex items-center justify-between border rounded-2xl px-4 py-3 cursor-pointer hover:border-green-500 transition">
              <div className="flex items-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Airtel_Logo_2010.svg"
                  alt="AIRTEL"
                  className="w-8 h-8 mr-3"
                />
                <span className="font-medium text-gray-800"></span>
              </div>
              <input type="radio" name="payment" className="hidden" />
              <span className="w-6 h-6 flex items-center justify-center border border-green-500 rounded-full text-green-500">
                ✓
              </span>
            </label>
  
            {/* TNM Mpamba Option */}
            <label className="flex items-center justify-between border rounded-2xl px-4 py-3 cursor-pointer hover:border-green-500 transition">
              <div className="flex items-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/TNM_Logo.svg"
                  alt="TNM"
                  className="w-8 h-8 mr-3"
                />
                <span className="font-medium text-gray-800"></span>
              </div>
              <input type="radio" name="payment" className="hidden" />
              <span className="w-6 h-6 flex items-center justify-center border border-green-500 rounded-full text-green-500">
                ✓
              </span>
            </label>
  
            {/* Visa Option */}
            <label className="flex items-center justify-between border rounded-2xl px-4 py-3 cursor-pointer hover:border-green-500 transition">
              <div className="flex items-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg"
                  alt="VISA"
                  className="w-8 h-8 mr-3"
                />
                <span className="font-medium text-gray-800"></span>
              </div>
              <input type="radio" name="payment" className="hidden" />
              <span className="w-6 h-6 flex items-center justify-center border border-green-500 rounded-full text-green-500">
                ✓
              </span>
            </label>
          </div>
          <p className="mt-4 text-center text-sm text-gray-800">
            Powered by Pay Changu
          </p>
        </div>
      </div>
    );
  }

  