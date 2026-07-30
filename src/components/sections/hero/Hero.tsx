import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import HeroScroll from "./HeroScroll";

import Printer from "../../three/printer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <HeroBadge />

        <HeroTitle />

        <HeroDescription />

        <HeroButtons />
      </div>

      {/* Escena 3D */}
      <div
        id="printer-section"
        className="relative z-10 mt-16 flex w-full justify-center"
      >
        <Printer />
      </div>

      {/* Indicador de scroll */}
      <HeroScroll />
    </section>
  );
}