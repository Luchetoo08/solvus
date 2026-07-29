import { motion } from "framer-motion";

export default function AnimatedGradient() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute

        left-1/2
        top-1/2

        h-[1100px]
        w-[1100px]

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-gradient-to-r
        from-cyan-500/5
        via-transparent
        to-blue-600/5

        blur-[120px]
      "
    />
  );
}