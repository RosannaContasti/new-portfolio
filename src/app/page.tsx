"use client";

import { useEffect } from "react";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
import HomeSection from "@/screens/Home";
import { Projects } from "@/screens/Projects";
import Technologies from "@/screens/Technologies";
import HamburgerMenu from "@/components/Menu";
import Slider from "@/components/Prueba";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger); // <--- FALTA ESTO

export default function Home() {
  useEffect(() => {
    const progressBar = document.querySelector(".progress") as HTMLElement;

    if (!progressBar) return;

    ScrollTrigger.create({
      start: 0,
      end: document.body.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        const progress = self.progress; // entre 0 y 1
        progressBar.style.transform = `scaleX(${progress})`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <HamburgerMenu />
      <HomeSection />
      <About />
      <Slider />
      {/* <Projects /> */}
      <Technologies />
      <Contact />
      <div className="progress" />
    </>
  );
}
