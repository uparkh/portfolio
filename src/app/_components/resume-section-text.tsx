import { JSX } from "react";

export default function ResumeSectionText({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="font-open-sans flex flex-col gap-2 text-left text-lg font-semibold">
      {children}
    </div>
  );
}
