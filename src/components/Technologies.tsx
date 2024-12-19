import React, { useRef, useEffect, useState } from "react";
import { Layout, Database, Server, Wrench } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { techStacks, additionalTools } from "./technologies/techData";
import { TechStackKey } from "./technologies/types";

// Interfaces
interface TechCardProps {
  stackKey: TechStackKey;
  icon: React.ReactNode;
  theme: string;
  t: any;
}

const Technologies = () => {
  // Hooks y referencias
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicar los stacks para el scroll infinito
  const extendedTechStacks = [...techStacks, ...techStacks, ...techStacks];

  // Configuración del scroll infinito
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollSpeed = 1;
    let isAutoScrolling = true;

    // Función de auto-scroll
    const autoScroll = () => {
      if (!isDragging && isAutoScrolling && container) {
        container.scrollLeft += scrollSpeed;

        // Reset del scroll cuando llega a la mitad
        if (
          container.scrollLeft >=
          (container.scrollWidth - container.clientWidth) / 2
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Iniciar animación
    animationFrameId = requestAnimationFrame(autoScroll);

    // Manejadores de eventos para pausar/reanudar el scroll
    const handleMouseEnter = () => {
      isAutoScrolling = true;
    };

    const handleMouseLeave = () => {
      isAutoScrolling = true;
    };

    // Event listeners
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Limpieza
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging]);

  // Manejadores de arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Componente de Tarjeta Tecnológica
  const TechCard = ({ stackKey, icon, theme, t }: TechCardProps) => {
    const techs = t(`technologies.stacks.${stackKey}.techs`, {
      returnObjects: true,
    });

    return (
      <div
        className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] backdrop-blur-sm rounded-xl p-4 sm:p-6 border ${
          theme === "light"
            ? "bg-white/50 border-gray-200"
            : "bg-gray-900/50 border-gray-800"
        }`}
      >
        {/* Encabezado de la tarjeta */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-2 rounded-lg ${
              theme === "light"
                ? "bg-blue-100 text-blue-600"
                : "bg-blue-600/10 text-blue-400"
            }`}
          >
            {icon}
          </div>
          <h3
            className={`text-lg sm:text-xl font-semibold ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {t(`technologies.stacks.${stackKey}.title`)}
          </h3>
        </div>

        {/* Lista de tecnologías */}
        <div className="space-y-4">
          {techs.map((tech: any) => (
            <div key={tech.name}>
              <div className="flex justify-between mb-1">
                <span
                  className={
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  }
                >
                  {tech.name}
                </span>
                <span
                  className={
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }
                >
                  {tech.level}%
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full ${
                  theme === "light" ? "bg-gray-200" : "bg-gray-800"
                }`}
              >
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${tech.level}%`,
                    backgroundColor: tech.color,
                    opacity: theme === "light" ? 0.8 : 1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="technologies"
      className={`py-12 sm:py-16 md:py-20 relative overflow-hidden ${
        theme === "light" ? "bg-white" : "bg-[#0c0c0c]"
      }`}
    >
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-7xl font-bold mb-4 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {t("technologies.title")}
          </h2>
        </div>

        {/* Carrusel de tecnologías */}
        <div
          ref={containerRef}
          className="overflow-x-hidden cursor-grab active:cursor-grabbing mb-12 sm:mb-16"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex gap-4 sm:gap-6 md:gap-8 py-4 sm:py-8">
            {extendedTechStacks.map((stack, index) => (
              <TechCard
                key={`${stack.key}-${index}`}
                stackKey={stack.key}
                icon={stack.icon}
                theme={theme}
                t={t}
              />
            ))}
          </div>
        </div>

        {/* Herramientas adicionales */}
        <div
          className={`backdrop-blur-sm rounded-xl p-6 sm:p-8 border ${
            theme === "light"
              ? "bg-white/50 border-gray-200"
              : "bg-gray-900/50 border-gray-800"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`p-2 rounded-lg ${
                theme === "light"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-blue-600/10 text-blue-400"
              }`}
            >
              <Wrench className="w-6 h-6" />
            </div>
            <h3
              className={`text-xl font-semibold ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {t("technologies.additionalTools.title")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalTools.map((tool) => (
              <div key={tool.key}>
                <div className="flex justify-between mb-2">
                  <span
                    className={
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }
                  >
                    {t(`technologies.additionalTools.tools.${tool.key}.name`)}
                  </span>
                  <span
                    className={
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }
                  >
                    {t(`technologies.additionalTools.tools.${tool.key}.level`)}%
                  </span>
                </div>
                <div
                  className={`w-full h-2 rounded-full ${
                    theme === "light" ? "bg-white" : "bg-gray-800"
                  }`}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${tool.level}%`,
                      backgroundColor: tool.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
