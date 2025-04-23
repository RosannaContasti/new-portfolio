"use client";

import React, { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "@/components/Card";

export const Projects = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cardsData = [
    "Una aplicación desarrollada con React Native y Styled Components para Proyecto Sirenas, una iniciativa argentina fundada por Agostina Bisio. El objetivo de la aplicación es acompañar a mujeres en la adopción de hábitos de vida más saludables y mejorar su calidad de vida.La aplicación incluye funcionalidades como video en vivo, galería de audio y video, chat con dupla y comunidad, y búsqueda de match para apoyo mutuo en el proceso de pérdida de peso. También cuenta con calendario y agenda, registro de comidas, hidratación, sueño, ánimo y ejercicio, además de herramientas para subir fotos y ver estadísticas personales. En la sección de pagos, se ofrece soporte para transferencia bancaria, MercadoPago y PayPal.",
    "Card 2 info",
    "Card 3 info",
    "Card 4 info",
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
          className="absolute md:w-44 left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-opacity-70 text-white"
          onClick={() => scrollCarousel("left")}
        >
          <i className="fas fa-chevron-left fa-5x opacity-50" />
        </button>

        {/* Contenedor de Cards con scroll */}
        <div
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none]  "
        >
          {cardsData?.map((info, index) => (
            <div key={index} className="md:w-[300px]">
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
          className="absolute md:w-44 right-0 top-1/2 -translate-y-1/2 z-10 p-2  hover:bg-opacity-70 text-white"
          onClick={() => scrollCarousel("right")}
        >
          <i className="fas fa-chevron-right fa-5x opacity-50" />
        </button>
      </div>
    </section>
  );
};
