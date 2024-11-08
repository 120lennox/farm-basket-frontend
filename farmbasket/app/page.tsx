import Faq from "./components/landing/faq";
import Hero from "./components/landing/hero";

import Footer from "./components/landing/footer";
import NavBar from "./navBar/navBar";

export default function Home() {
  return (
    <div>
      <div className="mx-8">
        <div>
          <NavBar />
        </div>
        <div>
          <Hero />
        </div>
        <section className="mt-16 mb-10">
          <div>
            <Faq />
          </div>
        </section>
        
      </div>
      <Footer />
    </div>
  );
}
