'use client'

import {useEffect} from "react";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
import HomeSection from "@/screens/Home";
import { Projects } from "@/screens/Projects";
import Technologies from "@/screens/Technologies";
import HamburgerMenu from "@/components/Menu";

export default function Home() {
  useEffect(() => {
    const progressBar = document.querySelector('.progress') as HTMLElement;

    const updateProgress = () => {
      // Calculamos el porcentaje de desplazamiento
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Actualizamos el ancho de la barra de progreso
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
      }
    };

    // Escuchamos el evento de scroll
    window.addEventListener("scroll", updateProgress);

    // Limpiamos el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
    <HamburgerMenu /> 
      <HomeSection  />
      <About/>
      <Projects />
      <Technologies />
      <Contact />
      <div className="progress"/>
    </>
  );
}
