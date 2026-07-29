import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";
import Container from "../layout/Container";

const features = [
  {
    icon: <Layers3 size={20} />,
    title: "Guía paso a paso",
    description:
      "Cada impresión se divide en etapas claras para que el estudiante sepa qué hacer en todo momento.",
  },
  {
    icon: <MonitorSmartphone size={20} />,
    title: "Interfaz intuitiva",
    description:
      "Diseñada para aprender, no para perder tiempo buscando funciones.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Seguimiento en tiempo real",
    description:
      "Visualizá el estado de la impresión, temperatura, material y progreso desde una única pantalla.",
  },
];

export default function Showcase() {
  return (
    <section className="relative py-36">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
              Opifex
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
              Un software creado para enseñar,
              <span className="text-blue-400"> no solo para imprimir.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Opifex acompaña a docentes y estudiantes durante todo el proceso de
              impresión 3D. Desde la preparación del modelo hasta el seguimiento
              de la impresión, todo ocurre dentro de una experiencia clara y
              guiada.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 flex items-center gap-3 text-blue-400 transition hover:gap-4">
              Conocer más sobre Opifex
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0E1A27]/80 p-8 backdrop-blur-xl">
              <div className="rounded-2xl border border-white/10 bg-[#111D2B] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Proyecto</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      Robot Educativo
                    </h3>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                    Imprimiendo
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoCard title="Archivo" value="robot_v4.stl" />
                  <InfoCard title="Material" value="PLA Blanco" />
                  <InfoCard title="Temperatura" value="205 °C" />
                  <InfoCard title="Tiempo restante" value="1h 42m" />
                </div>

                <div className="mt-8">
                  <div className="mb-2 flex justify-between text-sm text-slate-400">
                    <span>Progreso de impresión</span>
                    <span>82%</span>
                  </div>

                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

interface InfoCardProps {
  title: string;
  value: string;
}

function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">{title}</p>
      <h4 className="mt-2 text-lg font-semibold text-white">{value}</h4>
    </div>
  );
}