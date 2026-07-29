import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        mt-6
        text-4xl
        font-bold
        leading-tight
        text-white

        sm:text-5xl
        lg:text-6xl
      "
    >
      Creamos software que
      <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        impulsa tu negocio.
      </span>
    </motion.h1>
  );
}