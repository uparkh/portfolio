import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="grow bg-gradient-to-b from-neutral-800 to-neutral-500 flex flex-col-reverse">
          <p>test</p>
        </div>
      </div>
      <div className="h-10 bg-slate-100">
        test 2
      </div>

    </>
  );
}