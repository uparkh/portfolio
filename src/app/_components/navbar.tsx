import Image from "next/image";
import upanshuParekhLogo from "/public/upanshu-parekh-logo.svg";
import barsSolid from "/public/font-awesome/bars-solid.svg";
import arrowFromBox from "/public/font-awesome/arrow-up-right-from-square-solid.svg";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="absolute z-50 w-screen overflow-visible">
      <div className="flex items-center justify-between border-b-2 border-neutral-300 bg-gray-950 px-6 py-4">
        <Image
          src={upanshuParekhLogo}
          alt="Upanshu Parekh's Logo"
          sizes="9vw"
          className="w-[9vw] max-w-9"
          priority
        />
        <button className="rounded-m flex items-center justify-end gap-3">
          <p className="font-raleway text-lg font-bold text-white">MENU</p>
          <Image
            src={barsSolid}
            alt="Menu Bars"
            sizes="9vw"
            className="w-[9vw] max-w-9 invert"
            priority
          />
        </button>
      </div>
      <div className="absolute -z-10 h-screen w-screen bg-black bg-opacity-60"></div>
      <ul className="flex flex-col bg-gray-950 bg-opacity-85 text-center font-montserrat text-lg font-bold tracking-widest text-white">
        <li className="border-1 border-neutral-300 px-6 py-4">
          <a href="#about-me">ABOUT ME</a>
        </li>
        <li className="border-1 border-neutral-300 px-6 py-4">
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li className="border-1 border-neutral-300 px-6 py-4">
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li className="border-1 border-neutral-300 bg-neutral-600 bg-opacity-40 px-6 py-4 text-white">
          <a href="#" className="flex items-center justify-center gap-3">
            RESUME
            <Image
              src={arrowFromBox}
              alt="Arrow from Box"
              sizes="1.25rem"
              className="w-5 invert"
              priority
            />
          </a>
        </li>
        <li className="border-1 border-neutral-300 bg-neutral-300 px-6 py-4 text-black">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
