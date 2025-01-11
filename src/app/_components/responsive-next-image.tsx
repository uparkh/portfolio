import Image, { StaticImageData } from "next/image";
import { JSX } from "react";

export default function ResponsiveImage({
  src,
  alt,
  sizeVariant,
  className,
  priority,
}: Readonly<{
  src: string | StaticImageData;
  alt: string;
  sizeVariant: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}>): JSX.Element {
  let sizes: string;
  let baseClasses: string;
  switch (sizeVariant) {
    case "sm":
      baseClasses = "w-[1.5rem]";
      sizes = "1.5rem";
      break;
    case "md":
      baseClasses =
        "max-w-48 md:max-w-none w-45vw md:w-20vw lg:w-15vw xl:w-10vw";
      sizes =
        "45vw, (min-width: 768px) 20vw, (min-width: 1024px) 15vw, (min-width: 1280px) 10vw";
      break;
    case "lg":
      baseClasses =
        "max-w-72 md:max-w-none w-70vw md:w-35vw lg:w-30vw xl:w-25vw";
      sizes =
        "70vw, (min-width: 768px) 35vw, (min-width: 1024px) 30vw, (min-width: 1280px) 25vw";
      break;
  }

  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      className={`${baseClasses} ${className}`}
      priority={priority}
    />
  );
}
