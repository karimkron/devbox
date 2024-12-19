import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useColor } from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import { smoothScroll } from "../utils/smoothScroll";
import logo from "./img/devbox.png";

const Header = () => {
  const { t } = useTranslation();
  const { currentColor } = useColor();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      smoothScroll(href);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: "home", href: "#home", label: t("nav.home") },
    { key: "services", href: "#services", label: t("nav.services") },
    { key: "portfolio", href: "#portfolio", label: t("nav.portfolio") },
    { key: "techStack", href: "#technologies", label: t("nav.techStack") },
    {
      key: "testimonials",
      href: "#testimonials",
      label: t("nav.testimonials"),
    },
  ];

  return (
    <header
      className="relative w-full z-50"
      style={{
        backgroundColor: currentColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <nav className=" mx-auto h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px]">
        <div className="flex items-center justify-between h-full  lg:px-3">
          {/* Logo Section */}
          <div className="flex items-center pl-2 sm:pl-3 md:pl-3 lg:pl-3">
            <div className="min-w-[120px] flex items-center">
              <img
                src={logo}
                alt="DevBox Logo"
                className="h-8 w-auto min-w-[32px]
                  sm:min-w-[40px] sm:h-12
                  md:min-w-[46px] md:h-14
                  lg:min-w-[52px] lg:h-16
                  object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 ml-8 lg:ml-12">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                onClick={handleNavClick}
                label={item.label}
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <LanguageSelector />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 ml-4 text-white hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 md:hidden shadow-lg"
            style={{ backgroundColor: currentColor }}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.key}
                  href={item.href}
                  onClick={handleNavClick}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({
  href,
  onClick,
  label,
}: {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  label: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 lg:px-4 py-2 text-white  rounded-lg transition-colors duration-200
    text-sm sm:text-base md:text-lg lg:text-2xl
    font-medium tracking-wide whitespace-nowrap"
  >
    {label}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  label,
}: {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  label: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block w-full px-4 py-3 text-white hover:bg-white/10 rounded-lg
    text-base sm:text-lg font-medium tracking-wide
    transition-colors duration-200"
  >
    {label}
  </a>
);

export default Header;
