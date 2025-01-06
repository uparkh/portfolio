import { JSX } from "react";

export default function ResumeSectionHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="border-4 p-3 px-5">
      <h1 className="font-montserrat tracking-canyon text-center text-2xl font-bold">
        {children}
      </h1>
    </div>
  );
}
