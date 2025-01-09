import Navbar from "./_components/navbar";
import ResumeSectionH1 from "./_components/resume-section-h1";
import ResumeSectionText from "./_components/resume-section-text";
import ResumeExperienceH2 from "./_components/resume-experience-h2";
import ResumeExternalLink from "./_components/resume-link";

import Image from "next/image";
import portrait from "/public/boss.png";
import atSign from "/public/at-sign.svg";
import githubLogo from "/public/github-logo.svg";
import linkedinLogo from "/public/linkedin-circle.svg";
import uiucCsLogo from "/public/uiuc-cs-logo.png";
import codehsLogo from "/public/codehs-logo.png";
import motecIem from "/public/motec-iem.png";
import cyberscape from "/public/cyberscape.png";
import musaicLogo from "/public/musaic-logo.svg";
import fancySeparator from "/public/fancy-separator.png";
import customHeader from "/public/custom-header.png";
import altProfessionalPic from "/public/alt-professional-pic.jpeg";

import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="flex h-screen max-h-[37.5rem] min-h-[35rem] flex-col overflow-hidden">
        <Navbar />
        <div className="relative z-0 grow bg-gradient-to-b from-neutral-800 to-neutral-500">
          <div className="absolute left-0 right-0 -z-10 mx-auto max-w-[25rem] origin-top -scale-x-100 pt-4">
            <Image
              src={portrait}
              alt="Upanshu's portrait"
              priority
              sizes="25rem"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 grid h-min min-h-60 grid-cols-6 justify-end gap-3 p-4">
            <Image
              src={customHeader}
              alt=""
              fill={true}
              className="-z-10 antialiased opacity-70"
            />
            <div className="col-span-5 flex flex-col justify-evenly px-4 pt-11 font-raleway font-bold text-white shadow-white drop-shadow-lg">
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
                  src={atSign}
                  alt="At sign to Upanshu's email"
                  className="w-5vw min-w-8"
                  sizes="5vw"
                  priority
                />
              </a>
              <a
                href="https://www.github.com/blc5-33"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:brightness-75"
              >
                <Image
                  src={githubLogo}
                  alt="Github logo to Upanshu's Github account"
                  sizes="5vw"
                  className="w-5vw min-w-8"
                  priority
                />
              </a>
              <a
                href="https://www.linkedin.com/in/uparkh/"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:brightness-75"
              >
                <Image
                  src={linkedinLogo}
                  alt="Linkedin logo to Upanshu's Linkedin account"
                  sizes="5vw"
                  className="w-5vw min-w-8"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 bg-main-slate p-14 text-white">
        <ResumeSectionH1 className="border-white">ABOUT ME</ResumeSectionH1>
        <Image
          src={uiucCsLogo}
          alt="UIUC CS Logo"
          sizes="12rem"
          className="w-3/5 max-w-48 rounded-2xl"
        />
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
        <div className="flex flex-col items-center gap-5 border-b-2 border-black pb-10">
          <ResumeSectionH1 className="border-black">EXPERIENCE</ResumeSectionH1>
          <Image
            src={codehsLogo}
            alt="CodeHS Logo"
            sizes="11rem"
            className="w-3/5 max-w-44"
          />
          <div>
            <ResumeExperienceH2>CodeHS</ResumeExperienceH2>
            <ResumeSectionText>
              Over the summer of 2024 I worked as a Software Engineer Intern at
              CodeHS, a company that develops educational Computer Science
              material for millions of students. {"\n\n"} I worked on
              prototyping a search engine that performs fast similarity search
              on a word embedding database, as well as a realtime quiz
              leaderboard prototype for Questions of the Day (similar to
              Kahoot!).
            </ResumeSectionText>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 pt-10">
          <ResumeSectionH1 className="border-black">
            EXTRA&shy;CURRICULARS
          </ResumeSectionH1>
          <Image
            src={motecIem}
            alt="A screenshot of MoTeC i2 telemetry software with the Illinois Electric Motorsports logo"
            sizes="18rem"
            className="w-full max-w-72"
          />
          <div>
            <ResumeExperienceH2>Formula SAE</ResumeExperienceH2>
            <ResumeSectionText>
              Illini Electric Motorsports is about developing a racecar from
              scratch every year to compete internationally against other
              universities’ formula-spec cars. {"\n\n"} I was a member of the
              Data Acquisition and Quantitative Analysis team from Jan-Apr 2024,
              and saved the team $700+ by developing an in-house Python file
              format converter for the MoTeC i2 telemetry software (branching
              from existing open-source tools).
            </ResumeSectionText>
          </div>
        </div>
      </div>
      <div className="relative p-14">
        <Image
          src={cyberscape}
          alt=""
          fill={true}
          className="-z-10 object-cover object-center brightness-50"
        />
        <ResumeSectionH1 className="mx-auto w-min border-white text-center text-white">
          PORTFOLIO
        </ResumeSectionH1>
      </div>
      <div className="flex flex-col items-center gap-10 bg-main-slate p-14 text-white">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={musaicLogo}
            alt="Musaic Logo"
            sizes="16rem"
            className="w-full max-w-64 shadow-white"
          />
          <ResumeSectionText>
            Musaic was a visualization tool that aimed to help Spotify listeners
            input their listening history and tracked various characteristics of
            their music taste and how they changed throughout the years.
            {"\n\n"}It was a final project for CS467 (Social Visualization) and
            I developed much of the frontend design. {"\n\n"} Check out the
            project{" "}
            <ResumeExternalLink
              href="https://musaic-psi.vercel.app/visualization"
              after="🔗"
            >
              here
            </ResumeExternalLink>
          </ResumeSectionText>
        </div>
        <Image
          src={fancySeparator}
          alt=""
          sizes="13rem"
          className="w-5/6 max-w-52 antialiased"
        />
        <div className="flex flex-col items-center gap-5">
          <video
            src="/breakout_ddqn_video.mp4"
            autoPlay
            loop
            disablePictureInPicture
            controls
            playsInline
            muted
            className="w-[160px] rounded-xl"
          />
          <div>
            <ResumeExperienceH2 className="border-white">
              Atari Breakout AI
            </ResumeExperienceH2>
            <ResumeSectionText>
              In the CS444 Deep Learning for Computer Vision class, we learned
              all about about computer vision history, theory, and application,
              from classical gradient descent methods to present day innovations
              like transformers.{"\n\n"}We also learned about Deep Reinforcement
              Learning and applied the Double DQN algorithm to create an AI that
              can play the classic arcade game Atari Breakout! Results are shown
              in the video to the right.
            </ResumeSectionText>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 bg-main-ivory p-14 text-black">
        <ResumeSectionH1 className="border-black">CONTACT</ResumeSectionH1>
        <Image
          src={altProfessionalPic}
          alt="Upanshu's professional picture"
          className="w-4/5 max-w-48 rounded-full"
          sizes="12rem"
        />
        <ResumeSectionText>
          Feel free to contact me at my email below for any reason, whether it’s
          about any of my background listed above, professional inquiries, or
          just to say hi! {"\n\n"}Check out my{" "}
          <ResumeExternalLink href="#" after="📝">
            Resume
          </ResumeExternalLink>{" "}
          if you would like to as well.
        </ResumeSectionText>
        <a
          className="flex items-center gap-2 hover:opacity-80"
          href="mailto:parekhupanshu@gmail.com"
        >
          <div className="bg-neutral-400 p-1 shadow-md shadow-neutral-500">
            <Image
              src={atSign}
              alt="At sign to Upanshu's email"
              className="w-2vw min-w-5 invert"
              sizes="2vw"
            />
          </div>
          <p className="text-md font-raleway font-medium underline underline-offset-2">
            parekhupanshu@gmail.com
          </p>
        </a>
      </div>
    </>
  );
}
