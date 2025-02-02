import Features from "@/app/Components/Features";
import Footer from "@/app/Components/Footer";
import Hero from "@/app/Components/Hero";
import Highlights from "@/app/Components/Highlights";
import HowItWorks from "@/app/Components/HowItWorks";
import Navbar from "@/app/Components/Navbar";

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
