import { motion } from "framer-motion";
import Container from "../layout/Container";

const timeline = [
  {
    year: "01",
    title: "Un proyecto de robótica",
    text: "Todo comenzó cuando necesitábamos fabricar piezas mediante impresión 3D para un proyecto escolar.",
  },
  {
    year: "02",
    title: "El verdadero problema",
    text: "Aprender a utilizar una impresora 3D era mucho más complejo de lo que imaginábamos y el acompañamiento docente era limitado.",
  },
  {
    year: "03",
    title: "Una idea",
    text: "Nos preguntamos cómo sería una plataforma capaz de enseñar cada paso del proceso de forma intuitiva.",
  },
  {
    year: "04",
    title: "Así nació Solvus",
    text: "Convertimos esa idea en un proyecto de software educativo cuyo primer producto es Opifex.",
  },
];

export default function Story() {
  return (
    <section className="relative py-36">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Nuestra historia
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Todo comenzó con un robot.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Antes de pensar en desarrollar software, tuvimos el mismo problema
            que tienen cientos de estudiantes cuando se enfrentan por primera vez
            a una impresora 3D.
          </p>

        </motion.div>

        <div className="mx-auto mt-24 max-w-5xl">

          {timeline.map((item, index) => (

            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .12,
                duration: .6,
              }}
              className="group grid grid-cols-[90px_1fr] gap-8 border-l border-white/10 pb-14 pl-10 last:pb-0"
            >

              <div className="relative">

                <div className="absolute -left-[52px] flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-[#0E1A27] text-sm font-semibold text-blue-400">

                  {item.year}

                </div>

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white transition group-hover:text-blue-400">

                  {item.title}

                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-slate-400">

                  {item.text}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}