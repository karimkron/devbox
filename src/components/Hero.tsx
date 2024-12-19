import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useColor } from "../contexts/ColorContext";
import { smoothScroll } from "../utils/smoothScroll";
import Laptop from "./img/laptop.png";

interface Stat {
  number: string;
  text: string[];
}

const Hero = () => {
  const { t } = useTranslation();
  const { currentColor } = useColor();

  const defaultStats: Stat[] = [
    { number: "5", text: ["YEARS OF", "EXPERIENCE"] },
    { number: "22", text: ["PROJECTS", "+"] },
    { number: "43", text: ["CASES", ""] },
  ];

  const stats = (t("hero.stats", { returnObjects: true }) ||
    defaultStats) as Stat[];

  return (
    <section className="relative px-[5%] lg:px-[3%] py-[5%] lg:py-[3%]  bg-black overflow-hidden">
      {/* Split Background cuadros*/}
      <div className="absolute inset-0 flex">
        {/* Left side - solid black */}
        <div className="w-1/2 bg-black" />
        {/* Right side - grid */}
        <div className="w-1/2 bg-black relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              opacity: 1,
            }}
          />
        </div>
      </div>
      <div className=" mx-auto  relative z-10">
        <div className="flex flex-col md:flex-row lg:justify-between">
          <div className="w-full lg:w-[50%]  space-y-6 lg:space-y-8">
            {/* Welcome text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-base sm:text-lg mt-4 md:text-2xl lg:text-3xl 
    text-gray-400 tracking-wide"
            >
              {t("hero.welcome")}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[2.9rem] sm:text-[3.9rem] md:text-6xl lg:text-7xl xl:text-8xl 
    font-bold tracking-tight  leading-[1.1] md:leading-none
    mb-0 md:mb-4"
            >
              <span className="text-white block mb-0 md:mb-4">
                {t("hero.title")}
              </span>
              <span
                className="block transition-colors duration-300  md:text-6xl lg:text-8xl xl:text-8xl  md:mb-4"
                style={{ color: currentColor }}
              >
                {t("hero.subtitle")}
              </span>
            </motion.h1>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-6 md:ml-[0%] md:mr-[0%] sm:ml-[10%] sm:mr-[10%]"
            >
              {["Web Apps", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="flex items-center text-lg md:text-2xl lg:text-3xl xl:text-4xl    text-gray-400 lg:mb-8 xl:mb-14 md:mb-0"
                >
                  <span style={{ color: currentColor }}>#</span>
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Imagen centrada en dispositivos móviles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="block md:hidden mx-auto my-8"
            >
              <div className="relative max-w-[80%] mx-auto">
                <div className="relative">
                  {/* Esferas girando en el fondo */}
                  <div className="absolute inset-0 -z-10 ">
                    <img
                      src="/images/fondolaptop.png"
                      alt=""
                      className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%]
           opacity-80 animate-spin-slow select-none pointer-events-none
           object-cover"
                    />
                  </div>

                  {/* Video dentro de la pantalla del laptop */}
                  <div className="absolute top-[2%] left-[9%] right-[9%] bottom-[10%] z-10 overflow-hidden rounded-[1%]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                      <source src="/videos/fondo.mp4" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>

                  {/* Imagen del laptop */}
                  <img
                    src={Laptop}
                    alt={t("hero.image.alt")}
                    className="w-full relative z-20"
                  />
                </div>
              </div>
            </motion.div>
            {/* Botón de contacto centrado en móviles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="block md:hidden mx-auto my-8 w-[80%] sm:w-[70%]"
            >
              <button
                onClick={() => smoothScroll("#contact")}
                className="group relative overflow-hidden w-full
      px-4 sm:px-6 md:px-8
      py-3 sm:py-4 md:py-5
      rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: currentColor,
                }}
              >
                {/* Bolita blanca que se desliza */}
                <span
                  className="absolute aspect-square w-[45px] sm:w-[55px] md:w-[60px]
        bg-white rounded-full 
        left-3 top-1/2 -translate-y-1/2
        transition-all duration-700 ease-in-out
        group-hover:left-[calc(100%-70px)]"
                />
                {/* Texto del botón */}
                <span
                  className="relative z-10 text-white
        text-lg sm:text-xl md:text-2xl 
        font-medium whitespace-nowrap
        block text-center"
                >
                  {t("hero.cta.primary")}
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row md:flex-row lg:flex-row lg:justify-between
     md:py-0 
    space-y-1 sm:space-y-0 md:space-y-1 lg:space-y-0
    sm:space-x-4 md:space-x-3 lg:space-x-4
    md:w-1/2 sm:w-full
    sm:justify-center md:justify-start" // Añadido justify-center para sm
            >
              {stats.map((stat: Stat, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  {/* Números */}
                  <div className="flex justify-end w-1/2 lg:w-auto">
                    <span
                      className="text-[3rem] sm:text-[4rem] md:text-[3rem] lg:text-[5rem] xl:text-[7rem] 
            font-bold leading-none px-[5%]"
                      style={{
                        WebkitTextStroke: `2px ${currentColor}`,
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.number}
                    </span>
                  </div>

                  {/* Textos */}
                  <div className="flex w-1/2 lg:w-auto">
                    <div className="uppercase pl-1 pr-3 lg:pl-2">
                      {stat.text.map((line, i) => (
                        <div
                          key={i}
                          className="text-gray-300 
                text-sm sm:text-xs md:text-[0.7rem] lg:text-sm 
                tracking-wider leading-tight whitespace-nowrap  px-[5%]"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => smoothScroll("#contact")}
              className="hidden md:block group relative overflow-hidden
    px-12 sm:px-16 md:px-24 lg:px-36  
    py-3 sm:py-4 md:py-4 lg:py-6
    rounded-full transition-colors duration-300"
              style={{
                backgroundColor: currentColor,
              }}
            >
              {/* Bolita blanca que se desliza */}
              <span
                className="absolute 
      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 
      bg-white rounded-full 
      left-2 top-1/2 -translate-y-1/2 
      transition-all duration-500 ease-linear 
      group-hover:translate-x-[calc(100%+8rem)] sm:group-hover:translate-x-[calc(100%+12rem)] md:group-hover:translate-x-[calc(100%+16rem)] lg:group-hover:translate-x-[calc(100%+24rem)]"
              />
              {/* Texto del botón */}
              <span
                className="relative z-10 text-white
    text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
    font-medium whitespace-nowrap"
              >
                {t("hero.cta.primary")}
              </span>
            </motion.button>
          </div>

          {/* Imagen del lado derecho en dispositivos grandes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block mt-20 lg:w-[50%]"
          >
            <div className="relative">
              {/* Esferas girando en el fondo */}
              <div className="absolute inset-0 -z-10 ">
                <img
                  src="/images/fondolaptop.png" // Tu imagen con las esferas
                  alt=""
                  className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%]
          opacity-80 animate-spin-slow select-none pointer-events-none
          object-cover"
                />
              </div>

              {/* Video dentro de la pantalla del laptop */}
              <div
                className="absolute top-[2%] left-[9%] right-[9%] bottom-[8%] z-10 
        overflow-hidden rounded-[1%]"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/videos/fondo.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>

              {/* Imagen del laptop */}
              <img
                src={Laptop}
                alt={t("hero.image.alt")}
                className="w-full relative z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
