import { JSX } from "react";

export default function ResumeExperienceH2({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div
      className={`float-left mr-6 mt-2 rounded-br-xl border-b-2 border-r-2 border-black px-10 py-1 ${className}`}
    >
      <h2 className="font-overpass text-lg font-semibold 2xl:text-3xl">
        {children}
      </h2>
    </div>
  );
}
