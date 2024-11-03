import Faq from "./components/landing/faq";
import Hero from "./components/landing/hero";

import Footer from "./components/landing/footer";
import NavBar from "./navBar/navBar";

export default function Home() {
  return (
    <div className="mx-8">
      <div className="w-full bg-black h-16 mt-0"></div>
      <div>
        <NavBar />
      </div>
      <section className="mt-16 mb-10">
        <div>
          <Faq />
        </div>
      </section>
      <Footer />
    </div>
  );
}
