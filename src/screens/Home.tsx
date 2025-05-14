"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  const t = useTranslations("Header");
  return (
    <div
      id="home"
      className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col-reverse md:flex-row justify-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Contenedor de texto */}
      <div className="flex flex-col justify-center p-5 text-center md:text-left md:p-25">
        <div className="text-title">
          Rosanna
          <br />
          Contasti
        </div>

        <div className="text-subtitle underline text-center">
          <Typewriter
            words={[t("secondTitle"), t("thirdTitle")]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </div>
      </div>

      {/* Contenedor de imagen */}
      <div className="flex justify-center">
        <Image
          src="/bole.png"
          alt="Descripción de la imagen"
          width={200}
          height={100}
          quality={100}
          className="w-full h-auto md:h-screen max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default HomeSection;
