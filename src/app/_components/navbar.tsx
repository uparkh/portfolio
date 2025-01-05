import Image from "next/image";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <div className="flex items-center justify-between border-b-2 border-neutral-300 bg-gray-950 px-6 py-4">
      <Image
        src="/upanshu-parekh-logo.svg"
        alt="Upanshu Parekh's Logo"
        width={32}
        height={32}
        priority
      />
      <Image
        src="/font-awesome/bars-solid.svg"
        alt="Menu Bars"
        width={32}
        height={32}
        className="invert"
        priority
      />
    </div>
  );
}
