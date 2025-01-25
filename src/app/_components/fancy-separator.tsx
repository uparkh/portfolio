import fancySeparator from "/public/fancy-separator.png";
import Image from "next/image";
import { JSX } from "react";

export default function FancySeparator({
  invert,
}: {
  invert?: boolean;
}): JSX.Element {
  return (
    <Image
      src={fancySeparator}
      alt=""
      className={`w-5/6 max-w-52 ${invert && "invert"}`}
      sizes="13rem"
    />
  );
}
