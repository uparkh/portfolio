"use client";

import Image from "next/image";
import upanshuParekhLogo from "/public/upanshu-parekh-logo.svg";
import barsSolid from "/public/font-awesome/bars-solid.svg";
import arrowFromBox from "/public/font-awesome/arrow-up-right-from-square-solid.svg";
import closeXSolid from "/public/font-awesome/x-solid.svg";
import { JSX, useState } from "react";

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
    setMenuState(
      menuState === MenuState.OPEN ? MenuState.CLOSED : MenuState.OPEN,
    );
  }

  return (
    <nav
      className={`${menuState === MenuState.OPEN ? "fixed" : "absolute"} z-40 w-screen overflow-visible`}
    >
      <div className="relative z-20 flex items-center justify-between border-b-2 border-neutral-300 bg-gray-950 px-6 py-4">
        <Image
          src={upanshuParekhLogo}
          alt="Upanshu Parekh's Logo"
          sizes="2.25rem"
          className="max-h-9 w-[9vw]"
          priority
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
            priority
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
        <a href="#">
          <li className="border-1 flex items-center justify-center gap-3 border-neutral-300 bg-neutral-700 bg-opacity-75 px-6 py-4 text-white hover:opacity-60">
            RESUME
            <Image
              src={arrowFromBox}
              alt="Arrow from Box"
              sizes="1.25rem"
              className="w-5 invert"
              priority
            />
          </li>
        </a>
        <a href="#contact">
          <li className="border-1 border-neutral-300 bg-neutral-300 bg-opacity-75 px-6 py-4 text-black hover:opacity-60">
            CONTACT
          </li>
        </a>
      </ul>
    </nav>
  );
}
