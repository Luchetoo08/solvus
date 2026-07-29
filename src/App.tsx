import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07111C] text-white">
      {/* Glow superior */}
      <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Glow izquierdo */}
      <div className="absolute left-[-200px] top-[300px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

      {/* Glow derecho */}
      <div className="absolute right-[-150px] top-[700px] h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
      </main>
    </div>
  );
}