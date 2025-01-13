import { JSX } from "react";

export default function ResumeSectionH1({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className={`border-4 p-3 px-5 ${className}`}>
      <h1 className="hyphens-auto text-center font-montserrat text-xl font-bold capitalize tracking-canyon 2xl:text-4xl">
        {children}
      </h1>
    </div>
  );
}
