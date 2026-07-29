import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
}

export default function InfoCard({
  title,
  value,
  icon: Icon,
}: InfoCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#151C2C]
        p-5
        transition-all
        hover:border-cyan-400/30
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {title}
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
            {value}
          </h3>
        </div>

        {Icon && (
          <div className="rounded-xl bg-cyan-500/10 p-3">
            <Icon
              size={20}
              className="text-cyan-400"
            />
          </div>
        )}
      </div>

      <div className="relative mt-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />

        <span className="text-xs text-gray-400">
          Actualizado hace un momento
        </span>
      </div>
    </motion.div>
  );
}