import Hero from "../components/opifex/Hero";
import About from "../components/opifex/About";
import Problem from "../components/opifex/Problem";
import Features from "../components/opifex/Features";
import Preview from "../components/opifex/Preview";
import Benefits from "../components/opifex/Benefits";
import CTA from "../components/opifex/CTA";

export default function Opifex() {
  return (
    <main className="bg-[#07111C] text-white">
      <Hero />
      <About />
      <Problem />
      <Features />
      <Preview />
      <Benefits />
      <CTA />
    </main>
  );
}