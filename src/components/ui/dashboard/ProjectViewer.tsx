import { motion } from "framer-motion";
import {
  Box,
  Clock3,
  Layers3,
  Thermometer,
  Play,
  Cpu,
} from "lucide-react";

import InfoCard from "./InfoCard";
import ProgressCard from "./ProgressCard";

export default function ProjectViewer() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-[#151C2C]"
      >
        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div>
            <p className="text-sm text-cyan-400">
              Proyecto activo
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              Robot Educativo
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm font-medium text-emerald-300">
              Imprimiendo
            </span>
          </div>
        </div>

        {/* CENTRO */}

        <div className="grid gap-8 p-8 lg:grid-cols-[1.3fr_320px]">
          {/* MODELO */}

          <div className="relative flex h-[340px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="flex h-48 w-48 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10"
            >
              <Box
                size={90}
                className="text-cyan-400"
              />
            </motion.div>

            <div className="absolute bottom-6 left-6 rounded-xl bg-black/40 px-4 py-2 backdrop-blur">
              <p className="text-xs text-gray-400">
                Vista previa 3D
              </p>
            </div>
          </div>

          {/* PANEL */}

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <Cpu className="text-cyan-400" />

                <div>
                  <p className="text-xs text-gray-400">
                    Impresora
                  </p>

                  <h3 className="font-semibold text-white">
                    Bambu Lab X1 Carbon
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <Play className="text-emerald-400" />

                <div>
                  <p className="text-xs text-gray-400">
                    Estado
                  </p>

                  <h3 className="font-semibold text-white">
                    Producción en curso
                  </h3>
                </div>
              </div>
            </div>

            <ProgressCard progress={82} />
          </div>
        </div>
      </motion.div>

      {/* INFO */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          title="Material"
          value="PLA Blanco"
          icon={Layers3}
        />

        <InfoCard
          title="Temperatura"
          value="205°C"
          icon={Thermometer}
        />

        <InfoCard
          title="Capas"
          value="186 / 250"
          icon={Box}
        />

        <InfoCard
          title="Tiempo restante"
          value="1h 28m"
          icon={Clock3}
        />
      </div>
    </div>
  );
}