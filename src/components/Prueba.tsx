// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: "Proyecto Sirenas",
//     description:
//       "App mobile desarrollada con React Native para el seguimiento de embarcaciones en tiempo real. Implementa autenticación, mapas y notificaciones.",
//     video: "https://www.youtube.com/embed/VIDEO_ID_SIRENAS",
//     link: "https://github.com/rosanna/sirenas",
//   },
//   {
//     title: "Portfolio Personal",
//     description:
//       "Portfolio web creado con Next.js, GSAP y animaciones scroll. Presenta mis proyectos, contacto y tecnologías.",
//     video: "https://www.youtube.com/embed/VIDEO_ID_PORTFOLIO",
//     link: "https://rosannacontasti.dev",
//   },
//   {
//     title: "Blog Técnico",
//     description:
//       "Mini-blog con Next.js y Markdown donde comparto artículos sobre React, CSS y entrevistas técnicas.",
//     video: "https://www.youtube.com/embed/VIDEO_ID_BLOG",
//     link: "https://github.com/rosanna/blog-tech",
//   },
//   {
//     title: "Clon de Netflix",
//     description:
//       "Clon de la interfaz de Netflix usando React, Tailwind y consumo de la API de TMDB. Incluye autenticación y búsquedas.",
//     video: "https://www.youtube.com/embed/VIDEO_ID_NETFLIX",
//     link: "https://github.com/rosanna/netflix-clone",
//   },
//   {
//     title: "App de Clima",
//     description:
//       "Aplicación del clima desarrollada en React, usando la API de OpenWeatherMap y geolocalización.",
//     video: "https://www.youtube.com/embed/VIDEO_ID_CLIMA",
//     link: "https://github.com/rosanna/weather-app",
//   },
// ];

// export default function HorizontalScrollSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const panelsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const container = containerRef.current;
//     const panels = panelsRef.current;

//     if (!container || panels.length === 0) return;

//     gsap.to(panels, {
//       xPercent: -100 * (panels.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         pin: true,
//         scrub: 3,
//         // snap: 1 / (panels.length - 1),
//         start: "top top", // esto está bien
//         end: () => "+=" + container.offsetWidth * (panels.length - 1),
//         markers: false,
//       },
//     });

//     // panels?.forEach((panel, i) => {
//     //   const title = panel.querySelector(".project-title");
//     //   const info = panel.querySelector(".project-info");

//     //   if (!title || !info) return;

//     //   gsap
//     //     .timeline({
//     //       scrollTrigger: {
//     //         trigger: panel,
//     //         // Correctly reference the main scroll trigger by its ID
//     //         containerAnimation: gsap.getById("horizontalScroll"),
//     //         // Define start and end relative to the panel's position within the container animation
//     //         start: "center 50%", // When the center of the panel hits the center of the viewport
//     //         end: "center 50%", // End immediately after
//     //         toggleActions: "play none none reverse",
//     //         markers: false, // Set to true for debugging if needed
//     //       },
//     //     })
//     //     .to(title, {
//     //       top: "10%",
//     //       transform: "translate(-50%, 0%)",
//     //       duration: 1.5,
//     //       ease: "power3.inOut",
//     //     })
//     //     .to(
//     //       info,
//     //       {
//     //         opacity: 1,
//     //         y: 0,
//     //         duration: 1.5,
//     //         ease: "power3.inOut",
//     //       },
//     //       "-=1"
//     //     );
//     // });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       style={{
//         display: "flex",
//         overflow: "hidden",
//         height: "100vh",
//         position: "relative",
//       }}
//       className="projects"
//     >
//       {projects?.map((project, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) panelsRef.current[i] = el;
//           }}
//           className="panel"
//           style={{
//             minWidth: "100vw",
//             height: "100vh",
//             position: "relative",
//             background: i % 2 === 0 ? "white" : "black",
//             color: i % 2 === 0 ? "black" : "white",
//             padding: "4rem",
//             boxSizing: "border-box",
//             paddingLeft: i === 0 ? "10vw" : "4rem", // Adjusted padding
//             paddingRight: i === projects.length - 1 ? "10vw" : "4rem", // Adjusted padding
//             display: "flex", // Use flexbox for content alignment
//             flexDirection: "column",
//             justifyContent: "center", // Center content vertically
//             alignItems: "center", // Center content horizontally initially
//             textAlign: "center", // Center text
//           }}
//         >
//           {/* Keep the title positioned for the animation target */}
//           <div
//             className="project-title"
//             style={{
//               fontSize: "4rem",
//               zIndex: 1, // Ensure title is above info initially
//               width: "100%", // Allow title to take full width for centering
//             }}
//           >
//             {project?.title}
//           </div>

//           {/* <video
//             src={project.video}
//             controls
//             style={{
//               width: "70%",
//               // maxWidth: "800px",
//               margin: "2rem 0",
//               zIndex: 0,
//               // position: "relative",
//             }}
//           /> */}
//           <iframe
//             width="100%"
//             height="400"
//             src="https://www.youtube.com/embed/7CNmYOO9Gu4"
//             title={project.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{
//               maxWidth: "800px",
//               margin: "2rem 0",
//               zIndex: 0,
//               position: "relative",
//             }}
//           ></iframe>

//           <div
//             className="project-info"
//             style={{
//               zIndex: 0, // Ensure info is below title initially
//             }}
//           >
//             <p style={{ fontSize: "1.5rem" }}>
//               {
//                 "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
//               }
//             </p>
//             {/* Acá podrías poner video, link, etc */}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/components/Title";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Projects() {
  const t = useTranslations("Projects");
  const projects = [
    {
      title: t("firstProjectTitle"),
      image: "/app.png",
      description: t("firstProjectDescription"),
      technologies: ["React Native", "Zustand", "Expo", "Node.js", "CSS"],
      video: `https://www.youtube.com/embed/?autoplay=1&mute=1`,
    },
    {
      title: t("secondProjectTitle"),
      image: "/webapp.jpeg",
      description: t("secondProjectDescription"),
      technologies: ["React.js", "Node.js", "CSS"],
      video: null,
    },
    {
      title: t("thirdProjectTitle"),
      image: "admin.jpeg",
      description: t("thirdProjectDescription"),
      technologies: ["React.js", "Node.js", "CSS"],
      video: null,
    },
    {
      title: t("fourthProjectTitle"),
      image: "/bioi.png",
      description: t("fourthProjectDescription"),
      technologies: ["React.js", "Tailwind", "Node.js", "CSS"],
      video: null,
    },
  ];

  return (
    <div id="projects">
      <Title
        section="Projects"
        title="title"
        className="title subtitle flex-1 flex items-center justify-center"
      />
      {projects.map((project, index, i) => (
        <ProjectSection
          key={index}
          project={project}
          isReversed={index % 2 !== 0}
          index={i}
        />
      ))}
    </div>
  );
}

//import { useTranslations } from "next-intl";

const ProjectSection = ({ project, isReversed }: any) => {
  return (
    <section
      className={`h-screen flex flex-col md:flex-row items-center justify-center ${" text-white"}`}
    >
      {/* Media */}
      <motion.div
        className={`w-full md:w-1/2 p-6 ${isReversed ? "order-last" : ""}`}
      >
        <div
          className={`flip-card w-full h-full ${
            project.video ? "flip-enabled" : ""
          }`}
        >
          <div className="flip-inner rounded-xl shadow-xl w-full aspect-video relative">
            {/* Frente: imagen */}
            <div className="flip-front absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Detrás: video de YouTube */}
            <div className="flip-back absolute inset-0">
              <iframe
                className="w-full h-full rounded-xl"
                src={project.video}
                title={project.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 p-6 flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="text-lg text-gray-600">{project.description}</p>
        <ul className="flex gap-2 flex-wrap">
          {project?.technologies?.map((tech, i) => (
            <li key={i} className=" px-3 py-1 rounded-full text-sm text-white">
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
