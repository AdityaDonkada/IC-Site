import Link from "next/link";
import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
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
      <Link href="https://tally.so/r/wkEZkR">
        <span className="text-blackcolor">Apply</span>
      </Link>

      <Highlight className="text-blackcolor">
        <ChevronIcon />
      </Highlight>
    </Button>
  </Hero>
);
