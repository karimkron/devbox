import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envío del formulario
  };

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}
    >
      {/* Fondo de cuadrícula */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            theme === "light" ? "bg-gray-50" : "bg-black"
          }`}
          style={{ backgroundSize: "4rem 4rem" }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="container max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna izquierda - Texto */}
          <div className="flex flex-col justify-center">
            <h2
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {t("contact.title")}
              <br />
              {t("contact.subtitle")}
            </h2>
          </div>

          {/* Columna derecha - Formulario */}
          <div
            className={`${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Campo Nombre */}
              <div>
                <input
                  type="text"
                  placeholder={t("contact.form.name")}
                  className={`w-full px-0 py-4 bg-transparent border-b-2 focus:outline-none ${
                    theme === "light"
                      ? "border-gray-200 focus:border-gray-900 placeholder-gray-500"
                      : "border-gray-800 focus:border-white placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Campo Email */}
              <div>
                <input
                  type="email"
                  placeholder={t("contact.form.email")}
                  className={`w-full px-0 py-4 bg-transparent border-b-2 focus:outline-none ${
                    theme === "light"
                      ? "border-gray-200 focus:border-gray-900 placeholder-gray-500"
                      : "border-gray-800 focus:border-white placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <textarea
                  placeholder={t("contact.form.message")}
                  rows={4}
                  className={`w-full px-0 py-4 bg-transparent border-b-2 focus:outline-none resize-none ${
                    theme === "light"
                      ? "border-gray-200 focus:border-gray-900 placeholder-gray-500"
                      : "border-gray-800 focus:border-white placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Botón Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-4 px-8 rounded-full text-lg font-medium transition-all ${
                    theme === "light"
                      ? "bg-black hover:bg-gray-800 text-white"
                      : "bg-white hover:bg-gray-200 text-gray-950"
                  }`}
                >
                  {t("contact.form.send")}
                </button>
              </div>

              {/* Texto legal */}
              <p
                className={`text-sm mt-4 ${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
