"use client";

import React from "react";

//Hacer interfaces

// const Card = ({ index, active, setActive }: any) => {
//   const isActive = active === index;

//   return (
//     <div
//       className={`relative bg-black h-96 w-80 md:w-96 flex flex-col items-start justify-end filter  bg-cover bg-center m-4 transition-all duration-500 ease-in-out cursor-pointer grayscale
//           ${
//             isActive
//               ? " h-[80vh] z-50  md:translate-x-1/12 md:-translate-y-1/2 grayscale-0   transform-3d translate-z-2 bg-amber-900"
//               : "md:hover:scale-105"
//           }
//         `}
//       style={{ backgroundImage: "url('/bg.png')" }}
//       onClick={() => setActive(isActive ? null : index)}
//     >
//       {/* Contenedor de Texto */}
//       <div
//         className={`bg-white w-2/3 h-1/3 flex items-center justify-center transition-opacity duration-300 ${
//           isActive ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <h1 className="text-[#473eb6] text-xl font-bold">Sirenas Web App</h1>
//       </div>

//       {/* Si la card está activa, muestra el video y la descripción */}
//       <div
//         className={`absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-80 text-white transition-opacity duration-300 ${
//           isActive ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4 text-2xl text-black"
//           onClick={(e) => {
//             e.stopPropagation();
//             setActive(null);
//           }}
//         >
//           ✖
//         </button>
//         <video className="w-full h-1/2" controls>
//           <source src="/video.mp4" type="video/mp4" />
//           Tu navegador no soporta videos.
//         </video>
//         <p className="text-center bg-white text-black p-4">
//           Esta es una descripción del proyecto Sirenas Web App. Esta es una
//           descripción del proyecto Sirenas Web App. Esta es una descripción del
//           proyecto Sirenas Web App. Esta es una descripción del proyecto Sirenas
//           Web App. Esta es una descripción del proyecto Sirenas Web App. Esta es
//           una descripción del proyecto Sirenas Web App. Esta es una descripción
//           del proyecto Sirenas Web App. Esta es una descripción del proyecto
//           Sirenas Web App. Esta es una descripción del proyecto Sirenas Web App.
//           Esta es una descripción del proyecto Sirenas Web App. Esta es una
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { useState } from "react";

const Card = ({ index, active, setActive, cardsData }: any) => {
  const isActive = active === index;

  return (
    <>
      {/* Tarjeta principal */}
      {/* {active !== index && ( */}
      <div
        className={`relative bg-black h-96 w-80 md:w-96 flex flex-col items-start justify-end filter bg-cover bg-center m-4 transition-all duration-500 ease-in-out cursor-pointer grayscale md:hover:scale-105`}
        style={{ backgroundImage: "url('/bg.png')" }}
        onClick={() => setActive(index)}
      >
        {/* Contenedor de Texto */}
        <div className="bg-white w-2/3 h-1/3 flex items-center justify-center">
          <h1 className="text-[#473eb6] text-xl font-bold">Sirenas Web App</h1>
        </div>
      </div>
      {/* ) */}

      {/* Tarjeta expandida */}
      {isActive && (
        <div
          className={` fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[80vh] md:w-[60vw] z-50 bg-white shadow-2xl rounded-lg transition-all duration-500 ease-in-out`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-white z-10"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            ✖
          </button>
          <video className="w-full h-1/2" controls>
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <h1 className="text-[#473eb6] text-xl font-bold">Sirenas Web App</h1>

          <p className="text-center text-black p-4">{cardsData[index]}</p>
        </div>
      )}
    </>
  );
};

export default Card;
