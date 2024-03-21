import Image from "next/image";
import TeamComponent from "../../components/teams";
export default () => {
  const team = [
    {
      avatar: "/adityadonkada.png",
      name: "Aditya Donkada",
      title: "CTO",

      linkedin:
        "https://www.linkedin.com/in/bhim-prasad-aditya-donkada-b51a11290/",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "/Ayaan Headshot.png",
      name: "Ayaan Sidky",
      title: "COO",

      linkedin: "https://www.linkedin.com/in/ayaan-sidky-15508927b/",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-14">
      <p className="text-blackcolor text-3xl font-semibold sm:text-7xl w-[100rem] ml-[47rem] text-center">
        Meet our Team
      </p>
      <br />
      <br />
      <p className="text-blackcolor text-3xl font-semibold sm:text-2xl w-[100rem] ml-[47rem] text-center">
        ImpactCode is a dynamic 501(c)(3) non-profit organization with a
        clear-cut mission: to provide the younger generation with essential
        coding skills and valuable opportunities while simultaneously educating
        them about the incredible world of artificial intelligence. We believe
        that equipping today's youth with these fundamental skills is key to
        preparing them for the ever-evolving tech-centric landscape of the
        future.
      </p>
      <TeamComponent />
    </section>
  );
};
