import { motion } from "framer-motion";

import ProjectViewer from "./ProjectViewer";
import StatsCard from "./StatsCard";

export default function DashboardContent() {
  return (
    <div className="space-y-8">
      <ProjectViewer />

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Estadísticas
            </h2>

            <p className="text-sm text-gray-400">
              Resumen general del sistema.
            </p>
          </div>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
            Actualizado ahora
          </span>
        </div>

        <div
          className="
            grid
            gap-5

            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          <StatsCard
            title="Proyectos"
            value="24"
            color="from-cyan-500 to-blue-500"
          />

          <StatsCard
            title="Horas Ahorradas"
            value="183h"
            color="from-violet-500 to-fuchsia-500"
          />

          <StatsCard
            title="Tasa de Éxito"
            value="98%"
            color="from-emerald-500 to-green-500"
          />

          <StatsCard
            title="Impresoras"
            value="4"
            color="from-orange-500 to-red-500"
          />
        </div>
      </motion.section>
    </div>
  );
}