"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color={""} colorDark={""}>
      <Features.Main
        title={
          <div className="text-blackcolor mb-[2rem]">
            Learn from
            <br />
            Specialized Courses
          </div>
        }
        image="/Teacher-Image.png"
        text="Stay up-to-date with the latest industry trends to be best prepared for the future."
      />
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
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Experienced Professionals",
            text: "We expect all staff to demonstrate proficiency in every aspect of their teaching curriculum",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Robust Feedback Systems",
            text: "Our state of the art, Feedback Systems detect and priotize learning gaps based on user behavior and performance.",
          },
        ]}
      />
    </Features>
  );
};
