import NavBar from "./components/NavBar/page";
import Hero from "./components/hero/hero";
import Testimony from "./components/testimony/page";
import Tours from "./components/tours/page";

export default function Home() {
  return (
    <main className=" ">
    <Hero />
    <Tours />
    <Testimony />
    </main>
  );
}
