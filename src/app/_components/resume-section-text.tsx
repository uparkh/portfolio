import { JSX } from "react";

export default function ResumeSectionText({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <div className="font-open-sans text-lg font-semibold">{children}</div>;
}
