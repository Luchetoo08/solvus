import { motion } from "framer-motion";

import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import DashboardContent from "./dashboard/DashboardContent";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0B1120]/90
        backdrop-blur-xl
        shadow-2xl
      "
    >
      <div className="p-5 md:p-8">
        <DashboardHeader />

        <div className="mt-8 flex flex-col gap-6 lg:grid lg:grid-cols-[260px_1fr]">
          <DashboardSidebar />

          <DashboardContent />
        </div>
      </div>
    </motion.div>
  );
}