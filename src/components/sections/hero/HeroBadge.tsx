import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2"
    >
      <Sparkles
        size={16}
        className="text-cyan-400"
      />

      <span className="text-sm font-medium text-cyan-300">
        Soluciones digitales impulsadas por IA
      </span>
    </motion.div>
  );
}