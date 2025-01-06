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
      <h1 className="font-montserrat tracking-canyon text-center text-2xl font-bold">
        {children}
      </h1>
    </div>
  );
}
