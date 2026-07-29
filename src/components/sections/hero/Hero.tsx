import Container from "../../layout/Container";
import HeroBackground from "../../ui/HeroBackground";
import HeroLayout from "./HeroLayout";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <HeroBackground />

      <Container>
        <HeroLayout />
      </Container>
    </section>
  );
}