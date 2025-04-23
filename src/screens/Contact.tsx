"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa"; // LinkedIn y GitHub
import { SiGmail } from "react-icons/si"; // Gmail
import { PiFilePdfDuotone } from "react-icons/pi"; // PDF
import { IoDocumentTextOutline } from "react-icons/io5"; // Curriculum
import { SocialMediaIcons } from "@/components/SocialMediaIcons";
import Image from "next/image";

const socialLinks = [
  {
    iconComponent: <FaLinkedin />,
    href: "https://www.linkedin.com/in/tu-perfil",
  },
  {
    iconComponent: <FaGithub />,
    href: "https://github.com/tu-usuario",
  },
  {
    iconComponent: <SiGmail />,
    href: "mailto:tuemail@gmail.com",
  },
  {
    iconComponent: <IoDocumentTextOutline />,
    href: "/tu-cv.pdf",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen flex flex-col md:flex-row text-center bg-white"
    >
      {/* ------------------------ */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-around items-start px-16">
        {/* Texto */}
        <div>
          <Image
            src="/image1.png" // Ruta local (en public/)
            alt="Descripción de la imagen"
            width={200} // Ancho en píxeles
            height={100} // Alto en píxeles
            className=" w-96 max-w-full object-cover"
          />

          <h1 className="tracking-tighter text-4xl md:text-7xl text-black">
            ¡Dejame ayudarte!
          </h1>
          <p className="text-black py-2.5 text-base md:text-2xl tracking-tighter">
            Comunicate conmigo para una conversación exploratoria.
          </p>
        </div>

        {/* Iconos */}
        <div className="flex flex-row">
          {socialLinks?.map((item, index) => (
            <SocialMediaIcons
              key={index}
              iconComponent={item.iconComponent}
              href={item.href}
            />
          ))}
        </div>
      </div>

      {/* -------------- */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-end items-end">
        <Image
          src="/image2.png" // Ruta local (en public/)
          alt="Descripción de la imagen"
          width={200} // Ancho en píxeles
          height={100} // Alto en píxeles
          className=" w-96 max-w-full object-cover"
        />
        <button className="bg-black text-white w-56 h-16 font-bold md:my-24 md:mx-28 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#ffffff] hover:text-black">
          CONTACTAME
        </button>
      </div>
    </div>
  );
};

export default Contact;
