import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { projects } from "./portfolio/projectData";
import { ProjectKey } from "./portfolio/types";
import { ArrowRight } from "lucide-react";

// Interfaces
interface PortfolioCardProps {
  projectKey: ProjectKey;
  image: string;
  background?: string;
  website: string;
  theme: string;
  t: any;
}

const Portfolio = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className={`py-20 ${theme === "light" ? "bg-white" : "bg-[#0c0c0c]"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-6xl md:text-7xl font-bold mb-[10%] ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {t("portfolio.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <PortfolioCard
              key={project.key}
              projectKey={project.key}
              image={project.image}
              background={project.background}
              website={project.website}
              theme={theme}
              t={t}
            />
          ))}
        </div>

        {/* Botón Ver Más Proyectos */}
        <div className="text-center mt-[10%]">
          <a
            href="/projects" // Ruta a la página de todos los proyectos
            className={`inline-flex items-center gap-2 px-20 py-8 rounded-full text-lg font-medium transition-all hover:gap-9 ${
              theme === "light"
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            {t("portfolio.viewMore")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// PortfolioCard Component
const PortfolioCard = ({
  projectKey,
  image,
  background,
  website,
  theme,
  t,
}: PortfolioCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] ${
        theme === "light" ? "bg-[#111111]" : "bg-[#111111]"
      }`}
    >
      {/* Fondo condicional - imagen o color según tema */}
      <div className="absolute inset-0">
        {background ? (
          // Si hay imagen de fondo, la mostramos con opacidad 50%
          <img
            src={background}
            alt="background"
            className="w-full h-full object-cover opacity-50"
          />
        ) : (
          // Si no hay imagen de fondo, color según tema
          <div
            className={`w-full h-full opacity-30 ${
              theme === "light"
                ? "bg-white"
                : theme === "dark"
                ? "bg-gray-800"
                : "bg-gray-900" // tema night
            }`}
          />
        )}
      </div>

      {/* Main content container */}
      <div className="relative z-10 p-8 min-h-[600px] flex flex-col">
        {/* Project title */}
        <h3 className="text-4xl font-bold mb-4 text-white">
          {t(`portfolio.projects.${projectKey}.title`)}
        </h3>

        {/* Main image container with zoom effect and link */}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 relative mt-4 overflow-hidden cursor-pointer"
        >
          <div className="relative w-full h-full group">
            <img
              src={image}
              alt={t(`portfolio.projects.${projectKey}.title`)}
              className="w-full h-full object-cover transform transition-transform duration-200 group-hover:scale-110"
            />
          </div>
        </a>

        {/* Footer info */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-white text-lg">
            {t(`portfolio.projects.${projectKey}.category`)}
          </span>
          <span className="text-white text-lg">
            {t(`portfolio.projects.${projectKey}.year`)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
