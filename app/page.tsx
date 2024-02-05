import classNames from "classnames";
import { Container } from "../components/container";
import { StarsIllustration } from "../components/icons/stars";
import { BuildMomentum } from "../components/sections/build-momentum";
import { Clients } from "../components/sections/clients";
import { EnjoyIssueTracking } from "../components/sections/enjoy-issue-tracking";
import { HomepageHero } from "../components/sections/homepage-hero";
import { SetDirection } from "../components/sections/set-direction";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[15.6rem]">
        <Container className="pt-[10.4rem]">
          <HomepageHero />
        </Container>
      </div>

      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  );
}
