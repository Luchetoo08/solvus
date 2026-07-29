import { motion } from "framer-motion";
import {
  Box,
  Clock3,
  Layers3,
  Thermometer,
} from "lucide-react";

import InfoCard from "./InfoCard";
import ProgressCard from "./ProgressCard";

export default function ProjectViewer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Vista principal */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Robot Educativo
            </h3>

            <p className="text-sm text-gray-400">
              Proyecto activo
            </p>
          </div>

          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
            Imprimiendo
          </span>
        </div>

        <div className="flex h-72 items-center justify-center">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10"
          >
            <Box
              size={80}
              className="text-cyan-400"
            />
          </motion.div>
        </div>
      </div>

      {/* Información */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

      <ProgressCard progress={82} />
    </motion.div>
  );
}
