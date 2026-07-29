import ProjectViewer from "./ProjectViewer";
import StatsCard from "./StatsCard";

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      <ProjectViewer />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Proyectos"
          value="24"
          color="from-cyan-500 to-blue-500"
        />

        <StatsCard
          title="Horas Ahorradas"
          value="183h"
          color="from-violet-500 to-fuchsia-500"
        />

        <StatsCard
          title="Éxito"
          value="98%"
          color="from-emerald-500 to-green-500"
        />

        <StatsCard
          title="Impresoras"
          value="4"
          color="from-orange-500 to-red-500"
        />
      </div>
    </div>
  );
}