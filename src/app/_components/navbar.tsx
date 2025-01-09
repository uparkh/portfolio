import Image from "next/image";
import upanshuParekhLogo from "/public/upanshu-parekh-logo.svg";
import barsSolid from "/public/font-awesome/bars-solid.svg";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <div className="flex items-center justify-between border-b-2 border-neutral-300 bg-gray-950 px-6 py-4">
      <Image
        src={upanshuParekhLogo}
        alt="Upanshu Parekh's Logo"
        sizes="10vw"
        className="w-1/15 min-w-9"
        priority
      />
      <Image
        src={barsSolid}
        alt="Menu Bars"
        sizes="10vw"
        className="w-1/15 min-w-9 invert"
        priority
      />
    </div>
  );
}
