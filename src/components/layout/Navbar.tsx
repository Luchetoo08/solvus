import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#08131F]/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Solvus
          </h1>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm text-gray-300 transition hover:text-white">
              Inicio
            </a>
            <a href="#" className="text-sm text-gray-300 transition hover:text-white">
              Opifex
            </a>
            <a href="#" className="text-sm text-gray-300 transition hover:text-white">
              Nosotros
            </a>
            <a href="#" className="text-sm text-gray-300 transition hover:text-white">
              Contacto
            </a>
          </nav>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Solicitar demo
          </button>
        </div>
      </Container>
    </header>
  );
}