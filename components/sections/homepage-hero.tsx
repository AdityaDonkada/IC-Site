import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 text-blackcolor"
      href="/"
      variant="secondary"
      size="small"
    >
      <span className="text-blackcolor">ImpactCode 2024 – Join us Now</span>{" "}
      <Highlight className="text-blackcolor">→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Let's Impact the Future
      <br className="hidden md:block" />
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Turning Passion into Profession
      <br className="hidden md:block" />
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span className="text-blackcolor" href="https://tally.so/r/wkEZkR">Apply </span>
      <Highlight className="text-blackcolor">
        <ChevronIcon />
      </Highlight>
    </Button>
  </Hero>
);
