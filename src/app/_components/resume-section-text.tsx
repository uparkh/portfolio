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
      className={`text-wrap text-left font-open-sans text-base font-semibold 2xl:text-2xl ${className}`}
    >
      {children}
    </div>
  );
}
