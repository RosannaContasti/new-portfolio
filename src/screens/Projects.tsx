"use client";

import React, { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "@/components/Card";

export const Projects = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cardsData = [
    "Card 1 info",
    "Card 2 info",
    "Card 3 info",
    "Card 4 info",
    "Card 5 info",
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
    id="projects"
      className="min-h-screen bg-cover bg-center flex flex-col px-4 py-10"
      style={{ backgroundImage: "url('/projectCover.png')" }}
    >
      {/* Título */}
      <h2 className="subtitle text-center text-white mb-10">Projects</h2>

      {/* Flechas + Carrusel */}
      <div
        className="relative w-full flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        {/* Flecha izquierda */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white"
          onClick={() => scrollCarousel("left")}
        >
          <i className="fas fa-chevron-left fa-2x" />
        </button>

        {/* Contenedor de Cards con scroll */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-2"
        >
          {cardsData.map((info, index) => (
            <div key={index} className="snap-start flex-shrink-0 w-[300px]">
              <Card
                index={index}
                active={activeCard}
                setActive={setActiveCard}
                cardsData={cardsData}
              />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white"
          onClick={() => scrollCarousel("right")}
        >
          <i className="fas fa-chevron-right fa-2x" />
        </button>
      </div>
    </section>
  );
};
