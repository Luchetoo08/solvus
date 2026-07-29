import { ArrowRight, GraduationCap, Users } from "lucide-react";

import HeroCard from "./HeroCard";

export default function HeroCards() {
  return (
    <section className="mt-12 w-full">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <HeroCard
          icon={<Users size={22} />}
          number="+6"
          title="Integrantes"
          description="Equipo multidisciplinario que desarrolla soluciones innovadoras para la educación tecnológica."
        />

        <HeroCard
          icon={<GraduationCap size={22} />}
          number="100%"
          title="Educación"
          description="Creamos herramientas intuitivas para mejorar el aprendizaje de impresión 3D."
        />

        <HeroCard
          icon={<ArrowRight size={22} />}
          number="1°"
          title="Producto"
          description="Opifex es la primera plataforma de Solvus orientada a la formación tecnológica."
        />
      </div>
    </section>
  );
}