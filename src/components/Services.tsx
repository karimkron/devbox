import React, { useRef, useEffect, useState, TouchEvent } from "react";
import { Layout, Code2, Database, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import logo from "./img/devbox.png";

const Services = () => {
  const { theme } = useTheme(); // Obtener el tema actual (claro u oscuro).
  const { t } = useTranslation(); // Obtener las funciones de traducción.

  // Referencias y estados
  const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor del carrusel.
  const [isDragging, setIsDragging] = useState(false); // Estado para determinar si el usuario está arrastrando.
  const [startX, setStartX] = useState(0); // Posición inicial del arrastre.
  const [scrollLeft, setScrollLeft] = useState(0); // Posición inicial del desplazamiento.
  const [touchStart, setTouchStart] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Definición de servicios
  const services = [
    {
      icon: <Layout className="w-full h-full" />,
      title: t("services.cards.frontend.title"),
      description: t("services.cards.frontend.description"),
      backgroundColor: "#FFB01F",
      iconColor: "#FFFFFF",
      iconColorBackground: "#000000",
    },
    {
      icon: <Code2 className="w-full h-full" />,
      title: t("services.cards.backend.title"),
      description: t("services.cards.backend.description"),
      backgroundColor: "#4B9FFF",
      iconColor: "#FFFFFF",
      iconColorBackground: "#000000",
    },
    {
      icon: <Database className="w-full h-full" />,
      title: t("services.cards.database.title"),
      description: t("services.cards.database.description"),
      backgroundColor: "#FF7676",
      iconColor: "#FFFFFF",
      iconColorBackground: "#000000",
    },
    {
      icon: <Globe className="w-full h-full" />,
      title: t("services.cards.api.title"),
      description: t("services.cards.api.description"),
      backgroundColor: "#FF458B",
      iconColor: "#FFFFFF",
      iconColorBackground: "#000000",
    },
  ];

  // Duplicar contenido para lograr un efecto infinito.
  const extendedServices = [
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
  ];

  // Efecto para manejar el desplazamiento automático.
  useEffect(() => {
    const container = containerRef.current; // Acceso al contenedor.
    if (!container) return;

    let animationFrameId: number; // ID del frame de animación.
    let scrollSpeed = 1; // Velocidad de desplazamiento.
    let isAutoScrolling = true; // Determina si el auto-scroll está activo.

    // Función para el desplazamiento automático.
    const autoScroll = () => {
      if (!isDragging && isAutoScrolling && container) {
        container.scrollLeft += scrollSpeed; // Mueve el contenedor hacia la derecha.

        // Reinicia el scroll al llegar al límite.
        if (
          container.scrollLeft >=
          (container.scrollWidth - container.clientWidth) / 2
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll); // Solicita el siguiente frame.
    };

    animationFrameId = requestAnimationFrame(autoScroll); // Inicia el desplazamiento automático.

    // Pausar el auto-scroll cuando el mouse esté sobre el contenedor.
    const handleMouseEnter = () => {
      isAutoScrolling = true;
    };

    // Reanudar el auto-scroll cuando el mouse salga del contenedor.
    const handleMouseLeave = () => {
      isAutoScrolling = true;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup: Cancela la animación y elimina los eventos.
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging]); // Se actualiza cuando cambia el estado de arrastre.

  // Función para manejar el inicio del arrastre.
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsSwiping(true);
    setTouchStart(e.touches[0].clientX);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isSwiping) return;
    e.preventDefault();
    const x = e.touches[0].clientX;
    const walk = (touchStart - x) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <section
      id="services"
      className={`py-[8%] overflow-hidden mx-[5%] ${
        theme === "dark" ? "bg-[#0c0c0c]" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 text-center pb-[10%]">
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-[#0c0c0c]"
          }`}
        >
          {t("services.title")}
        </h2>
      </div>

      {/* Carrusel */}
      <div
        ref={containerRef}
        className="overflow-x-hidden cursor-grab active:cursor-grabbing touch-action-none"
        style={{
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-5 ">
          {extendedServices.map((service, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden select-none flex-shrink-0  
              py-5 px-2 sm:py-5 sm:px-4 md:py-5 md:px-5 xl:py-6 xl:px-6
              h-[320px] w-[230px] sm:h-[420px] sm:w-[300px] md:h-[510px] md:w-[350px] xl:h-[540px] xl:w-[370px]"
              style={{ backgroundColor: service.backgroundColor }}
            >
              <div className="absolute top-1/2 right-5 transform translate-x-1/2 -translate-y-1/2">
                <div
                  className="
                  w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 xl:w-96 xl:h-96
                  opacity-40 sm:opacity-30 md:opacity-40 xl:opacity-40"
                  style={{ color: service.iconColorBackground }}
                >
                  {service.icon}
                </div>
              </div>
              {/* Logo en esquina inferior derecha */}
              <div className="absolute bottom-0 right-4">
                <div
                  className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 "
                  style={{ color: service.iconColor }}
                >
                  <img
                    src={logo} // Reemplaza esto con la ruta a tu logo
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-3 sm:mb-4 md:mb-5 xl:mb-6">
                  <div
                    className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"
                    style={{ color: service.iconColor }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3
                    className="font-bold
                     text-xl sm:text-2xl md:text-3xl xl:text-4xl "
                    style={{ color: service.iconColor }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="opacity-90 sm:opacity-80 md:opacity-90 
                    font-bold md:font-normal 
                    text-sm sm:text-xl md:text-2xl xl:md:text-2xl"
                    style={{ color: service.iconColor }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
