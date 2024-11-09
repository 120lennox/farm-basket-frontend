import Footer from "./components/landing/footer";
import NavBar from "./components/landing/navbar";
import Login from "./components/login/login";
import SingUp from "./components/signUp/signUp";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SingUp />
      <Footer />
    </div>
  );
}
