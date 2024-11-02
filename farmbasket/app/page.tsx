import Hero from "./components/landing/hero";

export default function Home() {
  return (
    <div className="mx-8">
      <div className="w-full bg-black h-16 mt-0">
        <h1>Nav bar here</h1>
      </div>
      <div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}
