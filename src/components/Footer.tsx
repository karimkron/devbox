import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <footer
      className={`relative overflow-hidden py-20 ${
        theme === "light" ? "bg-gray-50" : "bg-[#0A0A0A]"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute inset-0 ${
            theme === "light" ? "bg-grid-light" : "bg-grid-dark"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px]
          ${theme === "light" ? "bg-blue-200/50" : "bg-blue-500/20"}`}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo Section */}
          {/* Logo Section */}
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <img
                src="/images/devbox.png"
                alt="Logo"
                className={`w-40 h-auto transition-all duration-300 ${
                  theme === "light"
                    ? "brightness-0" // Esto hará el logo negro en modo claro
                    : "brightness-100" // Esto mantendrá el logo blanco en modo oscuro
                }`}
              />
            </div>
            <p
              className={`text-lg ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {t("footer.brand.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-xl font-semibold mb-8 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-4">
              <FooterLink href="#services" theme={theme}>
                {t("nav.services")}
              </FooterLink>
              <FooterLink href="#portfolio" theme={theme}>
                {t("nav.portfolio")}
              </FooterLink>
              <FooterLink href="#technologies" theme={theme}>
                {t("nav.techStack")}
              </FooterLink>
              <FooterLink href="#contact" theme={theme}>
                {t("nav.contact")}
              </FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-xl font-semibold mb-8 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {t("footer.contact")}
            </h3>
            <ul
              className={`space-y-4 text-lg ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <li>Tarragona spain</li>
              <li>berbkarim@gmail.com</li>
              <li>+34 624 09 25 45</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className={`text-xl font-semibold mb-8 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {t("footer.followMe")}
            </h3>
            <div className="flex gap-6">
              <SocialLink
                href="https://github.com"
                icon={<Github className="w-6 h-6" />}
                label="GitHub"
                theme={theme}
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin className="w-6 h-6" />}
                label="LinkedIn"
                theme={theme}
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter className="w-6 h-6" />}
                label="Twitter"
                theme={theme}
              />
              <SocialLink
                href="mailto:contact@example.com"
                icon={<Mail className="w-6 h-6" />}
                label="Email"
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t pt-8 text-center ${
            theme === "light"
              ? "border-gray-200 text-gray-600"
              : "border-gray-800 text-gray-400"
          }`}
        >
          <p className="text-lg">
            &copy; {currentYear} DEVBOX. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
  theme,
}: {
  href: string;
  children: React.ReactNode;
  theme: string;
}) => (
  <li>
    <a
      href={href}
      className={`text-lg hover:text-blue-400 transition-colors duration-200 ${
        theme === "light" ? "text-gray-600" : "text-gray-400"
      }`}
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({
  href,
  icon,
  label,
  theme,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  theme: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-lg transition-colors duration-200 ${
      theme === "light"
        ? "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600"
        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400"
    }`}
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
