import { JSX } from "react";

export default function Anchor({
  children,
  href,
  className,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
}>): JSX.Element {
  return (
    <a
      href={href}
      className={`hover:opacity-65 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
