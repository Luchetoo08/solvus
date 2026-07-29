import { motion } from "framer-motion";

interface HeroCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

export default function HeroCard({
  icon,
  number,
  title,
  description,
}: HeroCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        px-6
        py-5
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.06]
      "
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <h3 className="mt-5 text-3xl font-black text-white">
        {number}
      </h3>

      <h4 className="mt-2 text-lg font-semibold text-white">
        {title}
      </h4>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <div className="mt-auto pt-5">
        <div className="h-px w-full bg-gradient-to-r from-cyan-400/30 to-transparent" />
      </div>
    </motion.div>
  );
}