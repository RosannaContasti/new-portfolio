"use client";

const About = () => {
  return (
    <div id="about" className="h-screen flex flex-col text-center">
      <span className="subtitle flex-1 flex items-center justify-center">
        About me
      </span>

      <span className="text-white text-base md:text-2xl flex-1 flex items-start justify-center px-5 md:px-10">
        Hola, soy Rosanna Contasti, programadora frontend con experiencia en
        React y React Native. Me encanta dar vida a proyectos usando
        herramientas como MUI, Tailwind, Bootstrap y Styled Components, siempre
        con un enfoque en diseño responsive para asegurarme de que todo se vea
        genial sin importar el dispositivo. Creo que el frontend es más que solo
        código: es una mezcla de creatividad y funcionalidad, donde cada
        componente y cada estilo contribuyen a una experiencia que realmente
        conecta con las personas. ¡Me encanta ese desafío!
      </span>
    </div>
  );
};

export default About;
