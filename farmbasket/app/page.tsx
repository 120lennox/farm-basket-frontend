import Hero from "./components/landing/hero";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl" >farm basket</h1>
      </div>
      <div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}
