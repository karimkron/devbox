import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      className={`py-20 ${
        theme === "light" ? "bg-white" : "bg-[#0c0c0c]"
      } mx-[5%]`}
      id="about"
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Imagen y detalles */}
          <div className="space-y-6">
            <div
              className={`rounded-3xl overflow-hidden ${
                theme === "light" ? "bg-white" : "bg-[#0c0c0c]"
              }`}
            >
              <img
                src="/images/karim.png" // Reemplaza con la ruta de tu imagen
                alt="Profile"
                className="w-auto h-auto rounded-2xl mx-auto"
              />
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <h2
                    className={`text-3xl xl:text-5xl font-bold  ${
                      theme === "light" ? "text-[#0c0c0c]" : " text-white"
                    }`}
                  >
                    {t("about.name")}
                  </h2>
                  <a
                    href={t("about.linkedinUrl")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6 xl:w-10 xl:h-10" />
                  </a>
                </div>
                <p className="text-gray-400  xl:text-2xl mt-2">
                  {t("about.role")}
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Historia y estadísticas */}
          <div className="space-y-8">
            <div>
              <h3
                className={` text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 ${
                  theme === "light" ? "text-[#0c0c0c]" : " text-white"
                }`}
              >
                {t("about.howItStarted")}
              </h3>
              <div
                className={` space-y-4 text-[15px] sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl ${
                  theme === "light" ? "text-slate-600" : " text-white"
                }`}
              >
                <p>{t("about.introduction")}</p>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <Stat
                value={t("about.stats.experienceN")}
                label={t("about.stats.experience")}
                theme={theme}
              />
              <Stat
                value={t("about.stats.projectsN")}
                label={t("about.stats.projects")}
                theme={theme}
              />
              <Stat
                value={t("about.stats.coffeeN")}
                label={t("about.stats.coffee")}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  value,
  label,
}: {
  value: string;
  label: string;
  theme: string;
}) => (
  <div className="text-center">
    <div className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-7xl font-bold text-[#ff2c2c] mb-2">
      {value}
    </div>
    <div className="text-gray-500 text-sm xl:text-xl">{label}</div>
  </div>
);

export default About;
