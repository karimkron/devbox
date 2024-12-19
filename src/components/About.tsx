import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      className={`py-20 ${theme === "light" ? "bg-white" : "bg-[#0c0c0c]"}`}
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Imagen y detalles */}
          <div className="space-y-6">
            <div
              className={`rounded-3xl overflow-hidden p-8  ${
                theme === "light" ? "bg-white" : "bg-[#0c0c0c]"
              }`}
            >
              <img
                src="/images/karim.png" // Reemplaza con la ruta de tu imagen
                alt="Profile"
                className="w-72 h-72 rounded-2xl mx-auto"
              />
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <h2
                    className={`text-3xl font-bold  ${
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
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-400 mt-2">{t("about.role")}</p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Historia y estadísticas */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">
                {t("about.howItStarted")}
              </h3>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>{t("about.introduction")}</p>
                <p>{t("about.careerHighlights")}</p>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <Stat
                value="17"
                label={t("about.stats.experience")}
                theme={theme}
              />
              <Stat
                value="37"
                label={t("about.stats.projects")}
                theme={theme}
              />
              <Stat
                value="39336+"
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
  theme,
}: {
  value: string;
  label: string;
  theme: string;
}) => (
  <div className="text-center">
    <div className="text-5xl font-bold text-[#ff4b4b] mb-2">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

export default About;
