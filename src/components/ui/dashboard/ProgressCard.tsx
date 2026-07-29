import { motion } from "framer-motion";

interface ProgressCardProps {
  progress: number;
}

export default function ProgressCard({
  progress,
}: ProgressCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">
          Progreso del proyecto
        </span>

        <span className="font-bold text-cyan-400">
          {progress}%
        </span>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </div>
  );
}