"use client";

import React from "react";

import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiReact } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import TechnologyCard from "@/components/TechnologyCard";

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
];

const Technologies = () => {
  return (
    <div id="technologies" className="h-screen flex flex-col md:flex-row text-center">
      <h1 className="subtitle my-10 md:mt-0 md:w-1/2 flex justify-center items-center">
        Technologies
      </h1>

      <div className="md:w-1/2 flex flex-col items-center justify-around pt-3.5">
        {technologies?.map((item, index) => {
          return (
            <TechnologyCard
              key={index}
              iconComponent={item.iconComponent}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
