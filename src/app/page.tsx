import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Highlights from "../components/highlights";

export default function Home() {

  return (
	  <main>
		<Navbar />
		<Hero />
		<Highlights />
	  </main>
  );
}
