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
          <div className="text-blackcolor">
            1 on 1 or
            <br />
            Group Classes
          </div>
        }
        image="/issues.webp"
        text="Learn from certified professionals. Get answers to your questions and stay up-to-date with the latest industry trends."
      />
      <Features.Grid
        features={[
          {
            title: "Holistic Approach to Learning:",
            text: "Break larger tasks into smaller issues",
          },
          {
            title: "Automated Learning Paths:",
            text: "Impact Code's automated features ensure tasks are completed, and progress is tracked effortlessly.",
          },
          {
            title: "Tailor-Made Learning Experiences:",
            text: "Based on the principle that every learner is unique.",
          },
          {
            title: "Filters for Personalized Learning:",
            text: " Stay in control of your learning environment. Use filters and custom views on Impact Code to see only what's relevant to your coding exploration",
          },
          {
            title: "Real-time Discussions:",
            text: "Engage in collaborative coding conversations seamlessly.",
          },
          {
            title: "Guided Learning Paths:",
            text: "Communicate effectively and effortlessly. Impact Code's issue templates guide you through articulating your thoughts and challenges.",
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
