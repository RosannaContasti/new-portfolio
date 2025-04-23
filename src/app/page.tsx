"use client";

import { useEffect } from "react";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
import HomeSection from "@/screens/Home";
import { Projects } from "@/screens/Projects";
import Technologies from "@/screens/Technologies";
import HamburgerMenu from "@/components/Menu";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const progressBar = document.querySelector(".progress") as HTMLElement;

    const updateProgress = () => {
      // Calculamos el porcentaje de desplazamiento
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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
      <HomeSection />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <div className="progress" />
    </>

    // <>
    // <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    //   <HamburgerMenu />
    //   <motion.section
    //     id="home"
    //     className="snap-start h-screen"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //   >
    //     <section>
    //     <HomeSection />

    //     </section>
    //   </motion.section>

    //   <motion.section
    //     id="about"
    //     className="snap-start h-screen w-screen"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //   >
    //     <About />
    //   </motion.section>

    //   <motion.section
    //     id="projects"
    //     className="snap-start h-screen"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //   >
    //     <Projects />
    //   </motion.section>

    //   <motion.section
    //     id="technologies"
    //     className="snap-start h-screen"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //   >
    //     <Technologies />
    //   </motion.section>

    //   <motion.section
    //     id="contact"
    //     className="snap-start h-screen"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //   >
    //     <Contact />
    //   </motion.section>
    // </div>
    // </>
  );
}
