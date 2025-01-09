import { JSX } from "react";

export default function ResumeExternalLink({
  href,
  className,
  children,
  after,
}: Readonly<{
  href: string;
  className?: string;
  children: React.ReactNode;
  after?: React.ReactNode;
}>): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`hover:opacity-80 text-inherit${className}}`}
    >
      <u className="underline-offset-2">{children}</u> {after}
    </a>
  );
}
