import { motion } from "framer-motion";
import {
  Home,
  FolderKanban,
  GraduationCap,
  Package,
  Printer,
  Settings,
  Clock3,
  Thermometer,
  Layers3,
} from "lucide-react";

const menu = [
  { icon: Home, label: "Inicio", active: true },
  { icon: FolderKanban, label: "Proyectos" },
  { icon: GraduationCap, label: "Aprendizaje" },
  { icon: Printer, label: "Impresoras" },
  { icon: Package, label: "Materiales" },
  { icon: Settings, label: "Configuración" },
];

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-10 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]/95 shadow-2xl backdrop-blur-xl">

        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">

              <Printer className="h-5 w-5 text-cyan-400" />

            </div>

            <div>

              <h2 className="font-semibold text-white">

                Opifex

              </h2>

              <p className="text-xs text-slate-400">

                Plataforma educativa

              </p>

            </div>

          </div>

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-xs text-slate-400">

              Impresora conectada

            </span>

          </div>

        </div>

        <div className="grid grid-cols-[230px_1fr]">

          {/* SIDEBAR */}

          <aside className="border-r border-white/10 p-5">

            <div className="space-y-2">

              {menu.map((item) => {

                const Icon = item.icon;

                return (

                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                      item.active
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />

                    {item.label}

                  </button>

                );

              })}

            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

              <p className="text-xs uppercase tracking-widest text-slate-500">

                Resumen

              </p>

              <Stat value="14" label="Proyectos" />

              <Stat value="92%" label="Éxito" />

              <Stat value="37h" label="Impresión" />

            </div>

          </aside>

          {/* CONTENIDO */}

          <main className="space-y-6 p-6">

            <div className="grid grid-cols-[1.4fr_.9fr] gap-6">

              {/* VISOR */}

              <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">

                <div className="mb-6 flex items-center justify-between">

                  <div>

                    <p className="text-xs text-slate-400">

                      Proyecto

                    </p>

                    <h3 className="text-lg font-semibold text-white">

                      Robot Educativo

                    </h3>

                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">

                    ● Imprimiendo

                  </span>

                </div>

                <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-gradient-to-br from-slate-900 to-[#08111E]">

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative h-40 w-40"
                  >
                    <div className="absolute inset-0 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 blur-sm" />

                    <div className="absolute inset-5 rounded-2xl border border-cyan-300/40" />

                    <div className="absolute inset-10 rounded-xl border border-cyan-200/60 bg-cyan-300/10" />

                  </motion.div>

                </div>

              </div>

              {/* PANEL */}

              <div className="space-y-4">

                <Info
                  icon={<Layers3 size={16} />}
                  title="Archivo"
                  value="robot_v4.stl"
                />

                <Info
                  icon={<Thermometer size={16} />}
                  title="Temperatura"
                  value="205°C"
                />

                <Info
                  icon={<Package size={16} />}
                  title="Material"
                  value="PLA Blanco"
                />

                <Info
                  icon={<Clock3 size={16} />}
                  title="Restante"
                  value="01:42:18"
                />

                <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">

                  <div className="mb-3 flex justify-between text-sm text-slate-400">

                    <span>Progreso</span>

                    <span>82%</span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
                    />

                  </div>

                </div>

              </div>

            </div>

          </main>

        </div>

      </div>

    </motion.div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="mt-5">

      <p className="text-2xl font-bold text-white">

        {value}

      </p>

      <span className="text-xs text-slate-400">

        {label}

      </span>

    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] p-4">

      <div className="flex items-center gap-2 text-cyan-400">

        {icon}

        <span className="text-xs uppercase tracking-wide">

          {title}

        </span>

      </div>

      <h4 className="mt-3 text-lg font-semibold text-white">

        {value}

      </h4>

    </div>
  );
}