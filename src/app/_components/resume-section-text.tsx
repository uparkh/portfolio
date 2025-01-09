import { JSX } from "react";

/**
 * For accessibility, do not write raw text for `children` in the JSX.
 * Use this component to wrap text content in a section of the resume (i.e. `<p>`, `<h1>`, etc).
 */
export default function ResumeSectionText({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div
      className={`text-md text-wrap text-left font-open-sans font-semibold ${className}`}
    >
      {children}
    </div>
  );
}
