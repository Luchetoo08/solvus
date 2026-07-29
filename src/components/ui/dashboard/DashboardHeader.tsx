import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Gestioná tus proyectos de impresión 3D de forma inteligente.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Buscar..."
            className="w-28 bg-transparent text-sm text-white outline-none placeholder:text-gray-500 md:w-48"
          />
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Bell size={18} className="text-white" />
        </button>
      </div>
    </motion.header>
  );
}