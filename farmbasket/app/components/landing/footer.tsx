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
          <h3 className=" mb-2">Security</h3>
          <h3 className=" mb-2">Markets</h3>
          <h3 className=" mb-2">Feature</h3>
        </div>
        <div>
          <h3 className=" font-bold mb-2 mt-8">Who we are</h3>
          <h3 className=" mb-2">About Us</h3>
          <h3 className=" mb-2">Our Team</h3>
          <h3 className=" mb-2">Privay Policy</h3>
        </div>
        <div>
          <h3 className=" font-bold mb-2 mt-8">Need help?</h3>
          <h3 className=" mb-2">Countact Us</h3>
          <h3 className=" mb-2">Help Center</h3>
          <h3 className=" mb-2">Security Tips</h3>
          <br />
        </div>
      </div>
    </div>
  );
}
