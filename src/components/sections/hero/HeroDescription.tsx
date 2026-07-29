import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className="
        mt-6
        max-w-xl
        text-base
        leading-8
        text-gray-400

        sm:text-lg
      "
    >
      Diseñamos plataformas modernas,
      automatizaciones inteligentes y
      soluciones digitales pensadas para
      empresas que quieren crecer.
    </motion.p>
  );
}