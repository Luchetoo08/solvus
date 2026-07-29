import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  color = "from-cyan-500 to-blue-500",
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#151C2C]
        p-6
      "
    >
      <div
        className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${color}`}
      />

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h2 className="mt-5 text-4xl font-bold text-white">
        {value}
      </h2>

      <div className="mt-6 h-1 w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}