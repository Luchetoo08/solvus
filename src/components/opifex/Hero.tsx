import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0d2945,transparent_65%)]" />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300"
          >
            Plataforma educativa para impresión 3D
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1, duration: .6 }}
            className="mt-8 max-w-4xl text-6xl font-black leading-tight text-white"
          >
            Aprender impresión 3D nunca fue tan simple.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, duration: .6 }}
            className="mt-8 max-w-3xl text-xl leading-9 text-slate-300"
          >
            Opifex reúne teoría, práctica y seguimiento en una sola plataforma,
            ayudando a estudiantes e instituciones a enseñar impresión 3D de una
            forma moderna, intuitiva y visual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <PrimaryButton>
              Comenzar ahora
              <ArrowRight size={18} />
            </PrimaryButton>

            <SecondaryButton>
              <Play size={18} />
              Ver demostración
            </SecondaryButton>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}