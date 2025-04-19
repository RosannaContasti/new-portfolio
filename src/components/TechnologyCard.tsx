"use client";
import React from "react";

const TechnologyCard = ({ iconComponent, title, description }: any) => {
  return (
    <div className=" w-1/2 flex flex-col md:flex-row items-center h-35">
      {/* Icono dinámico */}
      <div className="text-white text-3xl md:text-7xl p-2 rounded-lg">
        {iconComponent}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex flex-col text-white-400 items-start px-8">
        <span className="text-white text-2xl md:text-4xl text-playfair">
          {title}
        </span>
        {/* <span className="text-white">{description}</span> */}
      </div>
    </div>
  );
};

export default TechnologyCard;
