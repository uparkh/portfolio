import { JSX } from "react";

export default function ResumeSectionText({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div
      className={`font-open-sans text-md whitespace-pre-line text-wrap text-left font-semibold ${className}`}
    >
      {children}
    </div>
  );
}
