import Faq from "./components/landing/faq";
import Hero from "./components/landing/hero";

import Footer from "./components/landing/footer";
import NavBar from "./navBar/navBar";

export default function Home() {
  return (
    <div className="mx-8">
      <div className="w-full bg-black h-16 mt-0">
        <h1>Nav bar here</h1>
      </div>
      <div>
        <NavBar />
        <h1 className=" w-full h-[400px] bg-green-950 text-center font-bold">
          content that mountain is working on
        </h1>
        <Footer />
      </div>
      <section className="mt-16 mb-10">
        <div>
          <Faq />
        </div>
      </section>
    </div>
  );
}
