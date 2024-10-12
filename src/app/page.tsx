import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Highlights from "../components/highlights";
import Model from "../components/model";
import Features from "../components/features";
import HowItWorks from "../components/howitworks";
import Footer from "../components/footer";

export default function Home() {

  return (
	  <main className="overflow-x-hidden">
		<Navbar />
		<Hero />
		<Highlights />
		<Model />
		<Features />
		<HowItWorks />
		<Footer />
	  </main>
  );
}
