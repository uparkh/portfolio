import Navbar from "./_components/navbar";
import ResumeSectionH1 from "./_components/resume-section-h1";
import ResumeSectionText from "./_components/resume-section-text";
import ResumeExperienceH2 from "./_components/resume-experience-h2";
import Image from "next/image";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="flex h-screen max-h-[900px] min-h-[560px] min-w-[441px] flex-col overflow-hidden">
        <Navbar />
        <div className="relative z-0 grow bg-gradient-to-b from-neutral-800 to-neutral-500">
          <div className="absolute bottom-0 left-0 right-0 top-1 -z-10 mx-auto max-w-[30rem] origin-top translate-x-4 -scale-x-125 scale-y-125">
            <Image
              src="/boss.png"
              alt="Upanshu's portrait"
              width={2000}
              height={2992}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0 h-2/5 min-h-72 w-[200%] min-w-44 origin-bottom-right -rotate-[calc((480px/100vw)*7deg)] bg-black text-white opacity-70"></div>
          <div className="absolute inset-x-0 bottom-0 z-10 grid h-1/3 min-h-56 grid-cols-6 gap-3 p-6">
            <div className="col-span-5 flex flex-col justify-evenly p-4 pt-14 font-raleway font-bold text-white">
              <p className="text-xl">Hi, I am</p>
              <h1 className="text-4xl">Upanshu Parekh</h1>
              <h4 className="text-lg">Aspiring Software Engineer</h4>
            </div>
            <div className="flex flex-col items-center justify-around">
              <a
                href="mailto:parekhupanshu@gmail.com"
                className="hover:brightness-75"
              >
                <Image
                  src="/at-sign.svg"
                  alt="At sign to Upanshu's email"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.github.com/blc5-33"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:brightness-75"
              >
                <Image
                  src="/github-logo.svg"
                  alt="Github logo to Upanshu's Github account"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/uparkh/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:brightness-75"
              >
                <Image
                  src="/linkedin-circle.svg"
                  alt="Linkedin logo to Upanshu's Linkedin account"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-slate flex flex-col items-center gap-5 p-14 text-white">
        <ResumeSectionH1 className="border-white">ABOUT ME</ResumeSectionH1>
        <Image
          src="/uiuc-cs-logo.png"
          width={200}
          height={200}
          alt="UIUC CS Logo"
          className="rounded-2xl"
        ></Image>
        <ResumeSectionText>
          Hi! 👋 I’m Upanshu (oo-pahn-shoe), I’m a 4th year B.S. student at the
          University of Illinois at Urbana-Champaign (UIUC) studying Computer
          Science. I am currently working on web-based projects and plan on
          diving into some low level project soon. I have experience with:
          <ul className="my-2 list-inside list-disc">
            <li>Python (Pytorch, Numpy, etc)</li>
            <li>Containerization and Virtualization</li>
            <li>HTML / CSS / JavaScript (React.js, D3.js)</li>
            <li>Unix / Linux / C</li>
            <li>Java</li>
          </ul>
          I have dabbled in but want to get stronger at:
          <ul className="my-2 list-inside list-disc">
            <li>C++</li>
            <li>SQL / Databases</li>
            <li>Cloud Infrastructure (GCP / Oracle Cloud)</li>
            <li>Game Development</li>
          </ul>
          My personal interests include: Formula 1, astronomy, videogames,
          weightlifting. Feel free to bring these up in conversation if we have
          any shared interests!
        </ResumeSectionText>
      </div>
      <div className="bg-main-ivory p-14 text-black">
        <div className="flex flex-col items-center gap-5 border-b-2 border-black pb-5">
          <ResumeSectionH1 className="border-black">EXPERIENCE</ResumeSectionH1>
          <Image
            src="/codehs-logo.png"
            width={200}
            height={200}
            alt="UIUC CS Logo"
            className="rounded-lg"
          ></Image>
          <div>
            <ResumeExperienceH2>CodeHS</ResumeExperienceH2>
            <ResumeSectionText>
              bing fdnafiodsnacoiadsm oicdma soicbingfdnafiodsnacoiadcoiadsm
              oicdma soicbingfdnafiodsnacoiad
            </ResumeSectionText>
          </div>
        </div>
      </div>
    </>
  );
}
