<<<<<<< HEAD
import Faq from "./components/landing/faq";
import Hero from "./components/landing/hero";

import Footer from "./components/landing/footer";

export default function Home() {
  return (
    <div>
      <div className="mx-8">
        <div className="mt-16">
          <Hero />
        </div>
        <section className="mt-16 mb-10">
          <div>
            <Faq />
          </div>
        </section>
      </div>
      <Footer />
=======
const products=()=>{
  return(
    <div>
       <div className="text-col bg-slate-600 text-start content-center">
    <div >
       <b><h1>Mlimi Adyerere Agri store</h1></b> 
>>>>>>> de8a3e0c4f0c7e622bed38e4af2315824d66964c
    </div>
    <div >
        <h4>Dziko ndi wanu, ndalama wathu</h4>
    </div>
    <div>
        <h4>40% off discount</h4>
    </div>
</div>

<div><div className="flex row space-x-6 space-y-6">
  
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 .." >
  </div>
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 .." >
  </div>
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 " >
  </div> 
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 .." >
  </div>
</div>
<div className="flex row space-x-6 space-y-6">
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 .." >
  </div>
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 .." >
  </div>
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 .." >
  </div>
  <div className="flex-container box-border h-80 w-80 p-4 bg-slate-300 border-4 " >
  </div> 
</div>

</div>
</div>
    
  );
}
export default products;