import { motion } from "framer-motion";
import { dashboardMenu } from "./DashboardMenu";

export default function DashboardSidebar() {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        flex
        w-full
        flex-row
        gap-2
        overflow-x-auto
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-3
        backdrop-blur-xl

        lg:w-64
        lg:flex-col
        lg:overflow-visible
      "
    >
      <div className="mb-2 hidden px-2 lg:block">
        <h1 className="text-lg font-bold text-white">
          OPIFEX
        </h1>

        <p className="text-xs text-gray-400">
          Smart Printing
        </p>
      </div>

      <nav className="flex gap-2 lg:flex-col">
        {dashboardMenu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`
                flex
                min-w-max
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                transition-all

                ${
                  item.active
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <Icon size={18} />

              <span className="hidden lg:block">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto hidden rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 lg:block">
        <p className="text-xs text-cyan-300">
          Sistema
        </p>

        <h3 className="mt-1 font-semibold text-white">
          Todas las impresoras conectadas
        </h3>
      </div>
    </motion.aside>
  );
}