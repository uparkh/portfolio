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
      className={`font-open-sans whitespace-pre-line text-wrap text-left text-lg font-semibold ${className}`}
    >
      {children}
    </div>
  );
}
