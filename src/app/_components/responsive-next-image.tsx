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
  sizeVariant: "xs" | "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}>): JSX.Element {
  let sizes: string;
  let baseClasses: string;
  switch (sizeVariant) {
    case "xs":
      baseClasses = "max-w-6 md:max-w-none w-20vw md:w-3vw lg:w-2vw xl:w-2vw";
      sizes =
        "20vw, (min-width: 768px) 3vw, (min-width: 1024px) 2vw, (min-width: 1280px) 2vw";
      break;
    case "sm":
      baseClasses = "max-w-10 md:max-w-none w-10vw md:w-5vw lg:w-4vw xl:w-3vw";
      sizes =
        "10vw, (min-width: 768px) 5vw, (min-width: 1024px) 4vw, (min-width: 1280px) 3vw";
      break;
    case "md":
      baseClasses =
        "max-w-44 md:max-w-none w-45vw md:w-20vw lg:w-15vw xl:w-13vw";
      sizes =
        "45vw, (min-width: 768px) 20vw, (min-width: 1024px) 15vw, (min-width: 1280px) 13vw";
      break;
    case "lg":
      baseClasses = "max-w-72 md:max-w-none w-70vw md:w-30vw lg:w-25vw";
      sizes = "70vw, (min-width: 768px) 30vw, (min-width: 1024px) 25vw";
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
