import AnimatedGradient from "./AnimatedGradient";
import Glow from "./Glow";
import GridPattern from "./GridPattern";
import Particles from "./Particles";

export default function AnimatedBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        -z-50
        overflow-hidden
        bg-[#07111d]
      "
    >
      <GridPattern />

      <AnimatedGradient />

      <Glow />

      <Particles />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07111d]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(7,17,29,0.65)_100%)]" />
    </div>
  );
}