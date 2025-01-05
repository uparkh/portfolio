import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="grow bg-gradient-to-b from-neutral-800 to-neutral-500 relative">
            <div className="w-[200%] min-w-44 min-h-64 h-[43%] bg-black opacity-40 text-white absolute inset-x-0 bottom-0 origin-bottom-right -rotate-[calc((480px/100vw)*6deg)]"></div>
        </div>
      </div>
      <div className="h-10 bg-slate-100">
        test 2
      </div>

    </>
  );
}