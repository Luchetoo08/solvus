import {
  LayoutDashboard,
  FolderKanban,
  GraduationCap,
  Cpu,
  Box,
  Settings,
} from "lucide-react";

export const dashboardMenu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
  },
  {
    icon: FolderKanban,
    label: "Proyectos",
    active: false,
  },
  {
    icon: GraduationCap,
    label: "Aprendizaje",
    active: false,
  },
  {
    icon: Cpu,
    label: "Impresoras",
    active: false,
  },
  {
    icon: Box,
    label: "Materiales",
    active: false,
  },
  {
    icon: Settings,
    label: "Configuración",
    active: false,
  },
];