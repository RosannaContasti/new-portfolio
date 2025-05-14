"use client";

import { useLocale, useTranslations } from "next-intl";
//import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Link } from "react-scroll"; // Para scroll suave
//import { useRouter } from "next/router";

const HamburgerMenu = () => {
  // const router = useRouter();
  // const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const locale = useLocale();
  const t = useTranslations();

  const changeLanguage = () => {
    //  const router = useRouter();
    const newLocale = router.locale === "en" ? "es" : "en";
    console.log({ locale });
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const pages = [
    { name: t("Home.home"), id: "home" },
    { name: t("About.title"), id: "about" },
    { name: t("Technololgies.title"), id: "technologies" },
    { name: t("Projects.title"), id: "projects" },
    { name: t("Contact.title"), id: "contact" },
    { name: locale === "en" ? "ES" : "EN", id: "home" },
  ];

  return (
    <div className="relative z-20">
      {/* Icono hamburguesa */}
      <button
        className="absolute top-6 left-6 z-20 flex flex-col items-center space-y-1 p-2"
        onClick={toggleMenu}
      >
        <div
          className={`w-8 h-1 bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Menú desplegable */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="text-white text-2xl">
          <ul className="space-y-8">
            {pages.map((menuItem, index) => (
              <li key={index}>
                {menuItem.id === "language" ? (
                  <button
                    onClick={changeLanguage}
                    className="cursor-pointer menu-items-hover"
                  >
                    {menuItem.name}
                  </button>
                ) : (
                  <Link
                    to={menuItem.id}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer menu-items-hover"
                    onClick={toggleMenu}
                  >
                    {menuItem.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
