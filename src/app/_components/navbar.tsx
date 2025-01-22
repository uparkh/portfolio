"use client";

import Image from "next/image";
import upanshuParekhLogo from "/public/upanshu-parekh-logo.svg";
import barsSolid from "/public/font-awesome/bars-solid.svg";
// import arrowFromBox from "/public/font-awesome/arrow-up-right-from-square-solid.svg";
import closeXSolid from "/public/font-awesome/x-solid.svg";
import { JSX, useState } from "react";
// import Link from "next/link";

export default function Navbar(): JSX.Element {
  enum MenuState {
    LOADED,
    CLOSED,
    OPEN,
  }

  const [menuState, setMenuState] = useState<MenuState>(MenuState.LOADED);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  function handleToggleMenu(): void {
    if (isAnimating) return;

    if (menuState !== MenuState.OPEN) {
      scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setMenuState(
      menuState === MenuState.OPEN ? MenuState.CLOSED : MenuState.OPEN,
    );
  }

  return (
    <>
      {/* HIGHER WIDTH NAVBAR >= 1280px */}
      <nav className="absolute z-10 hidden w-full items-center justify-between border-b-2 border-neutral-300 bg-gray-950 bg-opacity-90 py-4 pl-12 pr-6 md:landscape:flex xl:landscape:border-none xl:landscape:bg-transparent xl:landscape:pl-16 xl:landscape:pt-8">
        <Image
          src={upanshuParekhLogo}
          alt="Upanshu Parekh's Logo"
          sizes=""
          className="w-11 xl:landscape:w-14 xl:landscape:invert 2xl:landscape:w-20"
        />
        <ul className="flex items-center gap-7 font-montserrat text-lg font-bold tracking-normal text-white xl:w-1/2 xl:justify-evenly xl:gap-0">
          <a href="#about-me">
            <li className="hover:opacity-75">About Me</li>
          </a>
          <a href="#experience">
            <li className="hover:opacity-75">Experience</li>
          </a>
          <a href="#portfolio">
            <li className="hover:opacity-75">Portfolio</li>
          </a>
          {/* <Link
            href="/files/Upanshu_Parekh_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li className="flex items-center gap-2 rounded-full border-2 border-white px-3 py-0.5 hover:opacity-75">
              RESUME
              <Image
                src={arrowFromBox}
                alt="Arrow from Box"
                sizes="1.25rem"
                className="w-5 invert"
              />
            </li>
          </Link> */}
          <a
            href="#contact-me"
            className="rounded-full bg-white px-3 py-1 text-black hover:bg-opacity-75"
          >
            <li className="hover:opacity-75">CONTACT</li>
          </a>
        </ul>
      </nav>
      {/* LOWER WIDTH NAVBAR < 1280px */}
      <nav
        className={`${menuState === MenuState.OPEN ? "fixed" : "absolute"} z-40 w-screen overflow-visible md:landscape:hidden`}
      >
        <div className="relative z-20 flex items-center justify-between border-b-2 border-neutral-300 bg-gray-950 px-6 py-4">
          <Image
            src={upanshuParekhLogo}
            alt="Upanshu Parekh's Logo"
            sizes="2.25rem"
            className="max-h-9 w-[9vw]"
          />
          <button
            className="rounded-m flex items-center gap-3 hover:opacity-75"
            onClick={handleToggleMenu}
          >
            <p className="font-raleway text-lg font-bold text-white">
              {menuState === MenuState.OPEN ? "CLOSE" : "MENU"}
            </p>
            <Image
              src={menuState === MenuState.OPEN ? closeXSolid : barsSolid}
              alt={menuState === MenuState.OPEN ? "Close Menu" : "Open Menu"}
              sizes="2.25rem"
              className="max-h-9 w-[9vw] invert"
            />
          </button>
        </div>
        <div
          onClick={handleToggleMenu}
          className={`${
            menuState === MenuState.LOADED
              ? "hidden"
              : menuState === MenuState.OPEN
                ? "fade-in"
                : "fade-out"
          } absolute -z-10 h-screen w-screen bg-black bg-opacity-60`}
        ></div>
        <ul
          onClick={handleToggleMenu}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationEnd={() => setIsAnimating(false)}
          className={`${
            menuState === MenuState.LOADED
              ? "hidden"
              : menuState === MenuState.OPEN
                ? "dropdown-active"
                : "dropdown-inactive"
          } z-0 flex flex-col bg-gray-950 bg-opacity-75 text-center font-montserrat text-lg font-bold tracking-widest text-white`}
        >
          <a href="#about-me">
            <li className="border-1 border-neutral-300 px-6 py-4 hover:opacity-60">
              ABOUT ME
            </li>
          </a>
          <a href="#experience">
            <li className="border-1 border-neutral-300 px-6 py-4 hover:opacity-60">
              EXPERIENCE
            </li>
          </a>
          <a href="#portfolio">
            <li className="border-1 border-neutral-300 px-6 py-4 hover:opacity-60">
              PORTFOLIO
            </li>
          </a>
          {/* <Link
            href="/files/Upanshu_Parekh_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li className="flex items-center justify-center gap-3 border-1 border-neutral-300 bg-neutral-700 bg-opacity-75 px-6 py-4 text-white hover:opacity-60">
              RESUME
              <Image
                src={arrowFromBox}
                alt="Arrow from Box"
                sizes="1.25rem"
                className="w-5 invert"
              />
            </li>
          </Link> */}
          <a href="#contact-me">
            <li className="border-1 border-neutral-300 bg-neutral-300 bg-opacity-75 px-6 py-4 text-black hover:opacity-60">
              CONTACT
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
