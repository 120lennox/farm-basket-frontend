import Footer from "./components/landing/footer";
import NavBar from "./navBar/navBar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <h1 className=" w-full h-[400px] bg-green-950 text-center font-bold">
          content that mountain is working on
        </h1>
        <Footer />
      </div>
    </div>
  );
}
