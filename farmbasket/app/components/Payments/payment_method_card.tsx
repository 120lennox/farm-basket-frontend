const paymentmethod=()=>{
    return(
        <div>
            <div className="items-center justify-between p-5">
                <div className="min-h-screen space-y-10 items-end m-10 p-10 justify-center rounded-2xl ms-20 mt-20 w-1/3 bg-gray-200 container">
                    <div className="flex  justify-center   items-center rounded-2xl">Account/payment methods</div>
                    <div className=" flex iterm-center justify-center text-green-600 font-fira rounded-2xl "><b>Choose Your Payment Method</b></div>
                    <div className="flex flex-row ccontainer mx-auto px-4 rounded-2xl bg-white border-green-600  py-8 space-x-10">
                    <div className="flex items-center justify-between border-2 border-green-500 rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Airtel_logo.svg/512px-Airtel_logo.svg.png" // Replace with your Airtel logo URL
                 alt="Airtel"
                className="h-8"
               />
               <p className="text-lg font-bold">XXX XXXX XX XXX</p>
       </div>
              <div className="h-6 w-6 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth={2}
                   stroke="currentColor"
                  className="h-4 w-4"
                   >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
               </svg>
             </div>
                   </div>
                    </div>
                    <div className=" flex flex-row ccontainer mx-auto px-4 rounded-2xl bg-white border-green-600  space-x-10 py-8">
                        <div className="">
                            YYy
                        </div>
                        <div className="">
                            XXX XXX XX XXX XXX
                        </div>
                        <div className="">
                            BBBBB
                        </div>
                    </div>
                    <div className=" flex flex-row container mx-auto px-4  border-green-600 bg-white rounded-2xl space-x-10 py-8">
                    <div className="">
                            ZZZ
                    </div>
                    <div className="">
                          XXXX  BBB TT
                    </div>
                    <div className="">
                            CCCCC
                    </div>   
                    </div>
                    <div className="flex items-center justify-center h-10 w-12/12 text-white w-90 bg-green-500 rounded-2xl">
                       <button><b>Submit</b></button>     
                    </div>
                    <div className="flex  items-center justify-center">
                        Powered by Pay Changu
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default paymentmethod;