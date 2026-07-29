import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <HeroBadge />

        <HeroTitle />

        <HeroDescription />

        <HeroButtons />
      </div>
    </section>
  );
}