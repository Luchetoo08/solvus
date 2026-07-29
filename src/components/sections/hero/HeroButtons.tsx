export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
      <button
        className="
          rounded-xl
          bg-cyan-500
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          hover:bg-cyan-400
        "
      >
        Solicitar una demo
      </button>

      <button
        className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          hover:bg-white/10
        "
      >
        Conocer nuestros productos
      </button>
    </div>
  );
}