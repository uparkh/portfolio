import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden">
        <Navbar />
        <div className="relative grow bg-gradient-to-b from-neutral-800 to-neutral-500">
          <div className="absolute inset-x-0 bottom-0 h-[43%] min-h-64 w-[200%] min-w-44 origin-bottom-right -rotate-[calc((480px/100vw)*6deg)] bg-black text-white opacity-40"></div>
          <div className=""></div>
        </div>
      </div>
      <div className="h-10 bg-slate-100">test 2</div>
    </>
  );
}
