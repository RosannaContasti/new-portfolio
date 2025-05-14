"use client";

import { useTranslations } from "next-intl";
//import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/components/Title";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const t = useTranslations("About");

  return (
    <div id="about" className="h-screen flex flex-col text-center">
      <Title
        section="About"
        title="title"
        className="title subtitle flex-1 flex items-center justify-center"
      />
      <span className="text-white text-base md:text-2xl flex-1 flex items-start justify-center px-5 md:px-10">
        {t("description")}
      </span>
    </div>
  );
};

export default About;
