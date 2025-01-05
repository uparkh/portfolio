import Navbar from "./_components/navbar";
import Image from "next/image";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden">
        <Navbar />
        <div className="relative grow bg-gradient-to-b from-neutral-800 to-neutral-500">
          <div className="absolute inset-x-0 bottom-0 h-2/5 min-h-72 w-[200%] min-w-44 origin-bottom-right -rotate-[calc((480px/100vw)*7deg)] bg-black text-white opacity-40"></div>
          <div className="absolute inset-x-0 bottom-0 grid h-1/3 min-h-56 grid-cols-6 gap-3 p-6">
            <div className="col-span-5 flex flex-col justify-evenly p-4 pt-14 font-raleway font-bold text-white">
              <p className="text-xl">Hi, I am</p>
              <h1 className="text-4xl">Upanshu Parekh</h1>
              <h4 className="text-lg">Aspiring Software Engineer</h4>
            </div>
            <div className="flex flex-col items-center justify-around">
              <Image
                src="/at-sign.svg"
                alt="At sign for Upanshu's email"
                width={32}
                height={32}
              />
              <Image
                src="/github-logo.svg"
                alt="Github logo for Upanshu's Github account"
                width={32}
                height={32}
              />
              <Image
                src="/linkedin-circle.svg"
                alt="Linkedin logo for Upanshu's Linkedin account"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-slate-100">test 2</div>
    </>
  );
}
