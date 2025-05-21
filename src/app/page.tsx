"use client";

import { useEffect } from "react";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
import HomeSection from "@/screens/Home";
//import { Projects } from "@/screens/Projects";
import Technologies from "@/screens/Technologies";
import HamburgerMenu from "@/components/Menu";
import Slider from "@/components/Prueba";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { gsap } from "gsap";
import Loader from "@/screens/Loader";

gsap.registerPlugin(ScrollTrigger, TextPlugin); // <--- FALTA ESTO

export default function Home() {
  useEffect(() => {
    const loader = document.querySelector(".loader-screen");
    const text = document.querySelector(".loader-text");

    if (!loader || !text) return;

    const timeline = gsap.timeline();

    timeline
      .to(text, {
        text: "Bienvenido", // Animación tipo máquina de escribir
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
      })
      .to(loader, {
        y: "-100%", // Cortina hacia arriba
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.5,
        onComplete: () => {
          loader.style.display = "none";
        },
      });

    return () => {
      timeline.kill(); // limpia la animación si se desmonta el componente
    };
  }, []);

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
      {/* Loader - Cortina */}

      <Loader />
      {/* Tu contenido principal */}
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
