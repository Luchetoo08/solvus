import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  color = "from-cyan-500 to-blue-600",
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4"
    >
      <p className="text-xs text-gray-400">{title}</p>

      <div
        className={`mt-3 h-2 rounded-full bg-gradient-to-r ${color}`}
      />

      <h3 className="mt-4 text-2xl font-bold text-white">
        {value}
      </h3>
    </motion.div>
  );
}