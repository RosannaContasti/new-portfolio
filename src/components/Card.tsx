"use client";

import { motion, AnimatePresence } from "framer-motion";

const Card = ({ index, active, setActive, cardsData }: any) => {
  const isActive = active === index;

  const cardVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateX: -30,
      y: 100,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutBack
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateX: 20,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Tarjeta principal */}
      {!isActive && (
        <motion.div
          layoutId={`card-${index}`}
          className="relative bg-black h-96 w-80 md:w-70 flex flex-col items-start justify-end filter bg-cover bg-center m-4 transition-all duration-500 ease-in-out cursor-pointer grayscale md:hover:scale-105"
          style={{ backgroundImage: "url('/bg.png')" }}
          onClick={() => setActive(index)}
        >
          <div className="bg-white w-2/3 h-1/3 flex items-center justify-center">
            <h1 className="text-[#473eb6] text-xl font-bold">
              Sirenas Web App
            </h1>
          </div>
        </motion.div>
      )}

      {/* Card expandida */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <div className="relative w-full h-full flex flex-col md:flex-row bg-black rounded-none shadow-2xl overflow-hidden">
              {/* Botón de cerrar */}
              <button
                className="absolute top-6 right-0 flex flex-col items-center justify-center space-y-1 p-2 group z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                }}
              >
                <div className="w-8 h-1 bg-white transition-all duration-300 transform rotate-45 translate-y-2 group-hover:bg-[#ff66c4]" />
                <div className="w-8 h-1 bg-white opacity-0 transition-all duration-300" />
                <div className="w-8 h-1 bg-white transition-all duration-300 transform -rotate-45 -translate-y-2 group-hover:bg-[#ff66c4]" />
              </button>

              {/* Video */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full md:pl-7 z-0 ">
                {/* <video
                  className="w-full h-full object-fix "
                  autoPlay
                  poster="/poster-image.jpg"
                >
                  <source
                    src="https://www.youtube.com/live/q5eDw4m0kI8?si=nu_tYOnfM8D8xLPh"
                    type="video/mp4"
                  />
                  Tu navegador no soporta videos.
                </video> */}

                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/q5eDw4m0kI8?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Descripción */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex flex-col justify-center items-center text-center">
                <h1 className="md:text-3xl font-bold text-white md:mb-4 text-2xl">
                  Sirenas Web App
                </h1>
                <p className="text-white md:text-lg leading-relaxed max-w-md  overflow-y-auto">
                  {cardsData[index]}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
