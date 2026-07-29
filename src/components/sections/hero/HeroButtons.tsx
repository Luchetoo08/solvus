import { motion } from "framer-motion";

import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
      }}
      className="
        mt-10
        flex
        flex-col
        gap-4

        sm:flex-row
      "
    >
      <PrimaryButton>
        Comenzar proyecto
      </PrimaryButton>

      <SecondaryButton>
        Ver servicios
      </SecondaryButton>
    </motion.div>
  );
}