"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";
import classNames from "classnames";
import Image from "next/image";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Image
            src="/ImpactCode Logo.png"
            width={110}
            height={110}
            alt="Picture of the author"
            className=""
          />{" "}
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible text-blackcolor",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 text-blackcolor bg-green",
                " [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm ",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="/programs">Programs</Link>
              </li>
              <li>
                <Link href="https://tally.so/r/wkEZkR">Careers</Link>
              </li>
              <li>
                <Link href="https://gofund.me/7a5e802c">Donate</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex h-full items-center text-blackcolor">
          <Button href="https://tally.so/r/wzqxJE">Enroll with us</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
