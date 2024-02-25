import { Container } from "../components/container";
import { EnjoyIssueTracking } from "../components/sections/enjoy-issue-tracking";
import { HomepageHero } from "../components/sections/homepage-hero";
import LogoCloud from "../components/logocloud";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[15.6rem]">
        <Container className="mt-[26.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <div className="mt-[30rem]">
        <LogoCloud />
      </div>
      <EnjoyIssueTracking />
    </>
  );
}
