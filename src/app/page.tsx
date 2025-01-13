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
import desktopHeader from "/public/desktop-header.svg";
import customHeader from "/public/custom-header.png";
import altProfessionalPic from "/public/alt-professional-pic.jpeg";
import doubleUpArrow from "/public/double-up-arrow.svg";

import { JSX } from "react";
import ResponsiveImage from "./_components/responsive-next-image";
import SocialLink from "./_components/social-link";

export default function Home(): JSX.Element {
  return (
    <>
      {/* HIGHER DEVICE WIDTH HERO LAYOUT >=768px */}
      <div className="relative z-0 hidden h-dvh overflow-hidden bg-main-ivory md:landscape:block">
        <div className="absolute bottom-0 right-0 top-0 h-full w-2/3">
          <Image
            src={desktopHeader}
            alt=""
            fill={true}
            className="-z-10 object-cover opacity-70 brightness-[0]"
          />
          <div className="absolute bottom-0 right-3 mx-auto h-[85%] w-5/6">
            <Image
              src={portrait}
              alt="Upanshu's portrait"
              fill={true}
              sizes="150%"
              className="translate-y-1/4 -scale-x-150 scale-y-150 object-contain object-center"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 flex h-2/3 w-1/2 flex-col items-start justify-between p-10 font-raleway font-bold text-black lg:pl-16">
          <header>
            <p className="text-xl 2xl:text-4xl">Hi, I am</p>
            <br />
            <h1 className="text-4xl 2xl:text-7xl">Upanshu Parekh</h1>
            <h4 className="text-2xl 2xl:text-5xl">
              Aspiring Software Engineer
            </h4>
          </header>
          <ul className="flex flex-col gap-5">
            <li>
              <SocialLink
                href="mailto:parekhupanshu@gmail.com"
                src={atSign}
                alt="At sign to Upanshu's email"
                text="parekhupanshu@gmail.com"
              />
            </li>
            <li>
              <SocialLink
                href="https://www.github.com/blc5-33"
                src={githubLogo}
                alt="Github logo to Upanshu's Github account"
                text="github.com/blc5-33"
              />
            </li>
            <li>
              <SocialLink
                href="https://www.linkedin.com/in/uparkh/"
                src={linkedinLogo}
                alt="Linkedin logo to Upanshu's Linkedin account"
                text="linkedin.com/in/uparkh"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* LOWER DEVICE WIDTH HERO LAYOUT <768px */}
      <div className="relative z-0 h-dvh overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-500 pt-[4.5rem] md:landscape:hidden">
        <div className="absolute -bottom-12 left-0 right-0 -z-10 mx-auto h-9/10">
          <Image
            src={portrait}
            alt="Upanshu's portrait"
            fill
            className="translate-y-[6%] -scale-x-125 scale-y-125 object-contain object-center"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 grid h-2/5 grid-cols-6 justify-end gap-3 p-4">
          <Image
            src={customHeader}
            alt=""
            fill={true}
            className="-z-10 opacity-70"
          />
          <div className="relative col-span-5 px-4 font-raleway font-bold text-white">
            <header className="absolute bottom-0 flex h-4/5 flex-col justify-evenly">
              <p className="text-3vmax">Hi, I am</p>
              <h1 className="text-5vmax">Upanshu Parekh</h1>
              <h4 className="text-3vmax">Aspiring Software Engineer</h4>
            </header>
          </div>
          <div className="flex flex-col items-center justify-around">
            <a
              href="mailto:parekhupanshu@gmail.com"
              className="hover:opacity-80"
            >
              <Image
                src={atSign}
                alt="At sign to Upanshu's email"
                className="w-[5vmax] min-w-8"
                sizes="5vmax"
              />
            </a>
            <a href="https://www.github.com/blc5-33">
              <Image
                src={githubLogo}
                alt="Github logo to Upanshu's Github account"
                className="w-[5vmax] min-w-8"
                sizes="5vmax"
              />
            </a>
            <a href="https://www.linkedin.com/in/uparkh/">
              <Image
                src={linkedinLogo}
                alt="Linkedin logo to Upanshu's Linkedin account"
                className="w-[5vmax] min-w-8"
                sizes="5vmax"
              />
            </a>
          </div>
        </div>
      </div>
      <article
        id="about-me"
        className="flex w-full flex-col items-center bg-main-slate p-14"
      >
        <section className="flex w-11/12 flex-col items-center gap-5 text-white">
          <ResumeSectionH1 className="border-white">ABOUT ME</ResumeSectionH1>
          <div className="flex flex-col items-center gap-5 md:flex-row-reverse">
            <ResponsiveImage
              src={uiucCsLogo}
              alt="UIUC CS Logo"
              className="rounded-2xl"
              sizeVariant="md"
            />
            <ResumeSectionText>
              <p>
                Hi! 👋 I’m Upanshu (oo-pahn-shoe), I’m a 4th year B.S. student
                at the University of Illinois at Urbana-Champaign (UIUC)
                studying Computer Science. I am most comfortable with:
              </p>
              <ul className="my-2 list-inside list-disc">
                <li>
                  Python (Pytorch, Numpy, and other Data Processing libraries)
                </li>
                <li>Game Development Engines (Unreal Engine 5)</li>
                <li>
                  HTML / JavaScript / TypeScript (React.js, Next.js, D3.js)
                </li>
                <li>CSS / Tailwind / LESS </li>
                <li>Unix / Linux Machines</li>
                <li>C / C++</li>
              </ul>
              <p>I have experience with:</p>
              <ul className="my-2 list-inside list-disc">
                <li>
                  Containerization and Virtualization (Docker, QEMU, Virtual
                  Machines)
                </li>
                <li>SQL / Databases</li>
                <li>Cloud Infrastructure (GCP / Oracle Cloud)</li>
                <li>Java</li>
              </ul>
              <p>
                My personal interests include 🏎 Formula 1, 🔭 astronomy, 👾
                videogames, and 🏋🏽‍♂️ weightlifting. Feel free to bring these up in
                conversation if we have any shared interests!
              </p>
            </ResumeSectionText>
          </div>
        </section>
      </article>
      <article
        id="experience"
        className="flex w-full flex-col items-center bg-main-ivory p-14 text-black"
      >
        <section className="flex w-11/12 flex-col items-center gap-5 border-b-2 border-black pb-10">
          <ResumeSectionH1 className="border-black">EXPERIENCE</ResumeSectionH1>
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <ResponsiveImage
              src={codehsLogo}
              alt="CodeHS Logo"
              sizeVariant="md"
            />
            <div>
              <ResumeExperienceH2>CodeHS</ResumeExperienceH2>
              <ResumeSectionText>
                <p>
                  Over the summer of 2024 I worked as a Software Engineer Intern
                  at CodeHS, a company that develops educational Computer
                  Science material for millions of students. I primarily used
                  Python, Django, LESS, SQL, and Docker.
                  <br /> <br />I worked on prototyping a search engine that
                  performs fast similarity search on a word embedding database
                  using Facebook AI Similarity Search, as well as a realtime
                  quiz leaderboard prototype for Questions of the Day (similar
                  to Kahoot!) using Google Firebase.
                </p>
              </ResumeSectionText>
            </div>
          </div>
        </section>
        <section className="flex w-11/12 flex-col items-center gap-5 pt-10">
          <ResumeSectionH1 className="border-black">
            EXTRA&shy;CURRICULARS
          </ResumeSectionH1>
          <div className="flex flex-col items-center gap-5 md:flex-row-reverse">
            <ResponsiveImage
              src={motecIem}
              alt="A screenshot of MoTeC i2 telemetry software with the Illinois Electric Motorsports logo"
              sizeVariant="lg"
            />
            <div>
              <ResumeExperienceH2>Formula SAE</ResumeExperienceH2>
              <ResumeSectionText>
                <p>
                  Illini Electric Motorsports is about developing a racecar from
                  scratch every year to compete internationally against other
                  universities’ formula-spec cars.
                  <br /> <br />I was a member of the Data Acquisition and
                  Quantitative Analysis team from January to April 2024, and
                  saved the team more than $700 by developing an in-house Python
                  file format converter for the MoTeC i2 telemetry software by
                  augmenting snippets of an existing open-source library.
                </p>
              </ResumeSectionText>
            </div>
          </div>
        </section>
      </article>
      <header
        id="portfolio"
        className="relative flex flex-col items-center p-12"
      >
        <Image
          src={cyberscape}
          alt=""
          fill={true}
          className="-z-10 object-cover object-center brightness-50"
        />
        <ResumeSectionH1 className="border-white text-white">
          PORTFOLIO
        </ResumeSectionH1>
      </header>
      <article className="flex w-full flex-col items-center gap-10 bg-main-slate p-14 text-white">
        <section className="flex w-11/12 flex-col items-center gap-10 md:flex-row">
          <ResponsiveImage
            src={musaicLogo}
            alt="Musaic Logo"
            sizeVariant="lg"
          />
          <ResumeSectionText>
            <p>
              Musaic was a visualization tool that aimed to help Spotify
              listeners input their listening history and tracked various
              characteristics of their music taste and how they changed
              throughout the years.
              <br /> <br />
              It was a final project for CS467 (Social Visualization) and I
              developed much of the frontend design using the D3.js
              visualization library (and React.js for interactivity).
              <br /> <br />
              Check out the project
              <ResumeExternalLink
                href="https://musaic-psi.vercel.app/visualization"
                after={<span className="inline brightness-200">🎵</span>}
              >
                here
              </ResumeExternalLink>
              and the
              <ResumeExternalLink
                href="https://github.com/jamieRollison/musaic"
                after="🔗"
              >
                GitHub code
              </ResumeExternalLink>
              for it
            </p>
          </ResumeSectionText>
        </section>
        <Image
          src={fancySeparator}
          alt=""
          className="w-5/6 max-w-52"
          sizes="13rem"
        />
        <section className="flex w-11/12 flex-col items-center gap-10 md:flex-row-reverse">
          <video
            src="/breakout_ddqn_video.mp4"
            autoPlay
            loop
            disablePictureInPicture
            controls
            playsInline
            muted
            className="w-70vw max-w-72 rounded-2xl md:w-30vw md:max-w-none lg:w-25vw xl:w-20vw"
          />
          <div>
            <ResumeExperienceH2 className="border-white">
              Atari Breakout AI
            </ResumeExperienceH2>
            <ResumeSectionText>
              <p>
                In the CS444 Deep Learning for Computer Vision class, we learned
                all about about computer vision history, theory, and
                application, from classical gradient descent methods to present
                day innovations like transformers.
                <br /> <br />
                We also learned about Deep Reinforcement Learning and applied
                the Double DQN algorithm to create an AI that can play the
                classic arcade game Atari Breakout! We used Google Colab to be
                able to train the model on higher end GPUs for efficiency.
                Results are shown in the video.
              </p>
            </ResumeSectionText>
          </div>
        </section>
      </article>
      <article
        id="contact-me"
        className="flex w-full flex-col items-center gap-5 bg-main-ivory p-14 text-black"
      >
        <ResumeSectionH1 className="border-black">CONTACT</ResumeSectionH1>
        <section className="flex w-11/12 flex-col items-center gap-10 md:flex-row">
          <ResponsiveImage
            src={altProfessionalPic}
            alt="Upanshu's professional picture"
            className="rounded-full"
            sizeVariant="md"
          />
          <ResumeSectionText>
            <p>
              Feel free to contact me at my
              <ResumeExternalLink
                href="mailto:parekhupanshu@gmail.com"
                after="📧"
              >
                Email
              </ResumeExternalLink>
              for any reason, whether it’s about any of my background listed
              above, professional inquiries, or just to say hi!
              <br /> <br />
              Check out my
              <ResumeExternalLink
                href="/files/Upanshu_Parekh_Resume.pdf"
                after="📝"
              >
                Resume
              </ResumeExternalLink>
              if you would like to as well.
            </p>
          </ResumeSectionText>
        </section>
      </article>
      <footer className="flex flex-col items-center gap-5 bg-main-slate p-7 text-white">
        <a
          href="#top"
          className="flex flex-col items-center gap-1 border-b-1 border-neutral-500 pb-4 hover:opacity-80"
        >
          <ResponsiveImage src={doubleUpArrow} alt="" sizeVariant="xs" />
          <p className="text-md font-montserrat font-bold capitalize tracking-widest">
            BACK TO TOP
          </p>
        </a>
        <div className="flex items-center justify-evenly gap-8">
          <a href="https://www.linkedin.com/in/uparkh/">
            <ResponsiveImage
              src={linkedinLogo}
              alt="Linkedin logo to Upanshu's Linkedin account"
              sizeVariant="sm"
            />
          </a>
          <a href="https://www.github.com/blc5-33">
            <ResponsiveImage
              src={githubLogo}
              alt="Github logo to Upanshu's Github account"
              sizeVariant="sm"
            />
          </a>
        </div>
        <p className="text-center font-raleway text-sm font-medium">
          Design inspired by Tomasz Gajda.
          <br /> Customized and developed with Next.js by Upanshu Parekh.
        </p>
      </footer>
    </>
  );
}
