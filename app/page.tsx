import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Technology from "@/components/Technology";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      <Navigation />
      <Hero />
      <About />
      <Problems />
      <Solutions />
      <Features />
      <Impact />
      <Technology />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
