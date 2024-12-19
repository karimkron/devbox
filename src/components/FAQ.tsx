import React from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqItems = [
    "process",
    "timeline",
    "technologies",
    "communication",
    "payment",
    "maintenance",
  ];

  return (
    <section
      className={`py-20 relative overflow-hidden ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}
    >
      {/* Fondo de cuadrados */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            theme === "light"
              ? "bg-[linear-gradient(rgba(0,0,0,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.1)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]"
          }`}
          style={{ backgroundSize: "4rem 4rem" }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="container max-w-4xl mx-auto px-6 relative">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {t("faq.title")}
          </h2>
        </div>

        {/* Contenedor de preguntas */}
        <div
          className={`rounded-2xl ${
            theme === "light" ? "bg-white" : "bg-[#0c0c0c]"
          } p-8`}
        >
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={item}
                className={`border-b ${
                  theme === "light" ? "border-gray-200" : "border-gray-800"
                }`}
              >
                {/* Botón de pregunta */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full py-6 flex items-center justify-between group"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`text-xl md:text-2xl font-medium text-left ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {t(`faq.questions.${item}.question`)}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    } ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}
                  />
                </button>

                {/* Contenido de la respuesta */}
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`text-lg ${
                        theme === "light" ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {t(`faq.questions.${item}.answer`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
