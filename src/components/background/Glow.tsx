import { motion } from "framer-motion";

export default function Glow() {
  return (
    <>
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/3

          h-[550px]
          w-[550px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10

          blur-[170px]
        "
      />

      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-0
          top-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-600/10

          blur-[160px]
        "
      />
    </>
  );
}