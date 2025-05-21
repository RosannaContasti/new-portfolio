"use client";
import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";
import AnimatedSphere from "@/components/AnimatedSphere";

const HomeSection = () => {
  const t = useTranslations("Header");
  return (
    <div
      id="home"
      className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col-reverse md:flex-row justify-center md:justify-between"
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
      <div className="flex justify-center bg-amber-600">
        <AnimatedSphere />
      </div>
    </div>
  );
};

export default HomeSection;
