"use client";

import React from "react";

import { SiReact } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { TiCss3 } from "react-icons/ti";
import Title from "@/components/Title";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

const technologies = [
  {
    iconComponent: <SiReact />,
    title: "React",
  },
  {
    iconComponent: <RiNextjsLine />,
    title: "Next.js",
  },
  {
    iconComponent: <TbBrandReactNative />,
    title: "React Native",
  },
  {
    iconComponent: <SiMui />,
    title: "Material UI",
  },
  {
    iconComponent: <BiLogoTailwindCss />,
    title: "Tailwind CSS",
  },
  {
    iconComponent: <TbBrandTypescript />,
    title: "Typeascript",
  },
  {
    iconComponent: <DiJavascript1 />,
    title: "Javascript",
  },
  {
    iconComponent: <TiCss3 />,
    title: "CSS",
  },
];

const personalSkills = [
  "Team Management",
  "Communication",
  "Creative",
  "Design Thinking",
  "Sprint",
  "Proactive",
  "Quick-adapt",
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="h-screen flex flex-col md:flex-column text-center justify-center"
    >
      <div className="flex md:flex-row flex-col h-[50vh] items-center">
        <Title
          section="Technologies"
          title="title"
          className="subtitle my-10 md:mt-0 md:w-1/2 flex md:flex-row justify-center items-center"
        />

        <div className="md:w-96">
          <div className="text-amber-50 p-6 rounded-2xl grid grid-cols-4 gap-6 max-w-md">
            {technologies?.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-4xl text-white spin-slow">
                  {tech.iconComponent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col h-[50vh] items-center">
        <Title
          section="Technologies"
          title="secondTitle"
          className="subtitle my-10 md:mt-0 md:w-1/2 flex md:flex-row justify-center items-center"
        />
        <div>
          <div className="flex flex-wrap gap-4 max-w-md justify-center">
            {personalSkills.map((skill, i) => (
              <span
                key={i}
                className="border px-4 py-2 rounded-xl text-sm  text-white hover:bg-white hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
