import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../layout/Container";
import DashboardMockup from "../ui/DashboardMockup";
import HeroBackground from "../ui/HeroBackground";
import HeroCards from "../ui/HeroCards";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <HeroBackground />

      <Container>
        <div className="flex flex-col gap-16">
          {/* Primera fila */}
          <div className="grid items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                Soluciones para la educación tecnológica
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
                Construimos el futuro del aprendizaje tecnológico.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                En Solvus desarrollamos herramientas digitales enfocadas en
                mejorar la educación mediante software intuitivo, moderno y de
                alto impacto.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <PrimaryButton>
                  Conocer Opifex
                  <ArrowRight size={18} />
                </PrimaryButton>

                <SecondaryButton>
                  Nuestra empresa
                </SecondaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <DashboardMockup />
            </motion.div>
          </div>

          {/* Segunda fila */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            <HeroCards />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}