import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PCOptimize from "./components/PCOptimize";
import GameSettings from "./components/GameSettings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PCOptimize />
      <GameSettings />
      <Contact />
      <Footer />
    </main>
  );
}
