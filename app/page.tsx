import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Highlights from "@/Components/Highlights";
import HowItWorks from "@/Components/HowItWorks";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  );
}
