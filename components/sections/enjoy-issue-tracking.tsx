"use client";
import { Features } from "../features";
import FeaturesComponent from "../featurecomponent";
import Classes from "../programs";
import HomeTeacher from "../hometeacher";

export const EnjoyIssueTracking = () => {
  return (
    <div>
      <HomeTeacher />

      <Features color={""} colorDark={""}>
        <Features.Grid
          features={[
            {
              title: "",
              text: "What is Impact Code?",
            },
            {
              title: "",
              text: "Why should you choose Impact Code?",
            },
            {
              title: "",
              text: "What exactly do we offer?",
            },
            {
              title: "",
              text: " Stay in control of your learning environment. Use filters and custom views on Impact Code to see only what's relevant to your coding exploration.",
            },
            {
              title: "",
              text: "We provide real time features with no cost that anyone can take advantage of. Here at impact code, we value student’s learning and happiness over all, ensuring proper growth and companionship along the way.",
            },
            {
              title: "",
              text: "Impact Code is a learning haven for everything computer science. Learn how to utilize your coding skills and pave the way for your future in the software industry!",
            },
          ]}
        />
      </Features>
    </div>
  );
};
