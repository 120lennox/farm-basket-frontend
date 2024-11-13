export default function Footer() {
  return (
    <div className="bg-gradient-to-t from-[#000003] via-[#06061F] to-[#10111D] text-white">
      <div className=" mx-8 flex justify-between ">
        <div>
          <h1 className=" font-bold mb-2 mt-8 text-[25px]">Farm Basket</h1>
          <button className=" mt-5 bg-[#0AFA2E] p-3 px-9 rounded-[20px]">
            Download
          </button>
        </div>
        <div>
          <h3 className=" font-bold mb-2 mt-8">what we do</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Security</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Markets</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Feature</h3>
        </div>
        <div>
          <h3 className=" font-bold mb-2 mt-8">Who we are</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">About Us</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Our Team</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Privay Policy</h3>
        </div>
        <div>
          <h3 className=" font-bold mb-2 mt-8">Need help?</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Countact Us</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Help Center</h3>
          <h3 className=" mb-2 hover:text-[#0afa2e]">Security Tips</h3>
          <br />
        </div>
      </div>
    </div>
  );
}
