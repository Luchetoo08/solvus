import DashboardMockup from "../../ui/DashboardMockup";
import HeroContent from "./HeroContent";

export default function HeroLayout() {
  return (
    <div
      className="
        grid
        gap-16
        items-center

        lg:grid-cols-[0.9fr_1.1fr]
      "
    >
      <HeroContent />

      <div className="w-full">
        <DashboardMockup />
      </div>
    </div>
  );
}