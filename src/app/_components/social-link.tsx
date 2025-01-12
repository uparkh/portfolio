import ResponsiveImage from "./responsive-next-image";
import { JSX } from "react";

export default function SocialLink({
  href,
  src,
  alt,
  text,
}: Readonly<{
  href: string;
  src: string;
  alt: string;
  text: string;
}>): JSX.Element {
  return (
    <a className="flex items-center gap-2 hover:opacity-80" href={href}>
      <div className="bg-main-silver p-1.5 shadow-md shadow-black">
        <ResponsiveImage
          src={src}
          alt={alt}
          className="invert"
          sizeVariant="xs"
        />
      </div>
      <p className="text-md font-raleway font-medium">{text}</p>
    </a>
  );
}
