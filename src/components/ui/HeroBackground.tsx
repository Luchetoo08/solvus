export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Glow izquierdo */}

      <div className="absolute -left-64 -top-64 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Glow derecho */}

      <div className="absolute -right-72 bottom-[-250px] h-[750px] w-[750px] rounded-full bg-blue-600/10 blur-3xl" />

      {/* Gradiente superior */}

      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-cyan-500/5 to-transparent" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Fade */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08111D]" />

    </div>
  );
}