import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center

        lg:items-start
        lg:text-left
      "
    >
      <HeroBadge />

      <HeroHeading />

      <HeroDescription />

      <HeroButtons />
    </div>
  );
}