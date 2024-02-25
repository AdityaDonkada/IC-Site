import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { LinkedinIcon } from "./icons/linkedin";
import { DiscordIcon } from "./icons/discord";
const footerLinks = [
  {
    title: "Programs",
    links: [
      { title: "Our Programs", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Apply", href: "https://tally.so/r/wkEZkR" },
    ],
  },
  {
    title: "Donate",
    links: [
      { title: "", href: "#" },
      { title: "Support Us", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Community", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-transparent-white py-[5.6rem] text-sm text-blackcolor bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)]">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-blackcolor">
            ImpactCode - Designed worldwide
          </div>
          <div className="mt-auto flex space-x-4 text-blackcolor ">
            <Link href="https://github.com/AdityaDonkada/IC-Site">
              <GithubIcon />
            </Link>
            <Link href="https://www.linkedin.com/company/impactcodeorg">
              <LinkedinIcon />
            </Link>
            <Link href="https://discord.gg/24jDEM9E">
              <DiscordIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-blackcolor transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
