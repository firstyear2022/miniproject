import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/animations.css";

const links = [
  { name: "Home", path: "/" },
  { name: "symptoms_label", path: "/symptoms" },
  { name: "awareness_label", path: "/awareness" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav
      className="px-4 sm:px-6 py-4 shadow-md flex items-center sticky top-0 z-50 animate-gradient"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 50%, #ec4899 75%, #f43f5e 100%)",
        backgroundSize: "300% 300%",
        animation: "gradient-move 4s linear infinite",
      }}
    >
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl sm:text-2xl font-bold text-white drop-shadow cursor-pointer" onClick={() => window.location.href = '/'}>
          {t("breastcare", "BreastCare")}
        </h1>
        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 items-center">
          {links.map((link, idx) => (
            <React.Fragment key={link.name}>
              <Link
                to={link.path}
                className={`text-lg font-medium relative ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                } transition-colors duration-300 before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-center`}
              >
                {t(link.name)}
              </Link>
              {/* Insert language dropdown after awareness */}
              {link.name === "awareness_label" && (
                <div className="relative ml-2">
                  <button
                    onClick={() => setLangOpen((prev) => !prev)}
                    className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold shadow hover:bg-pink-700 transition"
                    aria-label="Select Language"
                  >
                    {/* Show current language letter */}
                    {i18n.language === "en" && "EN"}
                    {i18n.language === "hi" && "हि"}
                    {i18n.language === "kn" && "ಕ"}
                  </button>
                  {langOpen && (
                    <div
                      className="absolute left-1/2 top-12 transform -translate-x-1/2 flex flex-col items-center gap-2 bg-white rounded-full shadow-lg py-2 px-4"
                      style={{
                        borderRadius: "50%",
                        minWidth: "80px",
                        zIndex: 100,
                      }}
                    >
                      <button
                        onClick={() => {
                          i18n.changeLanguage("en");
                          setLangOpen(false);
                        }}
                        className="text-pink-700 hover:bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold transition"
                      >
                        EN
                      </button>
                      <button
                        onClick={() => {
                          i18n.changeLanguage("hi");
                          setLangOpen(false);
                        }}
                        className="text-pink-700 hover:bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold transition"
                      >
                        हि
                      </button>
                      <button
                        onClick={() => {
                          i18n.changeLanguage("kn");
                          setLangOpen(false);
                        }}
                        className="text-pink-700 hover:bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold transition"
                      >
                        ಕ
                      </button>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center ml-2"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-white/95 shadow-md flex flex-col items-center gap-4 py-4 sm:hidden animate-fade-in z-50">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === link.path
                  ? "text-pink-600"
                  : "text-gray-700 hover:text-pink-600"
              } transition-colors duration-300`}
            >
              {t(link.name)}
            </Link>
          ))}
          {/* Language dropdown for mobile */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="text-pink-700 bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold transition"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("hi")}
              className="text-pink-700 bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold transition"
            >
              हि
            </button>
            <button
              onClick={() => i18n.changeLanguage("kn")}
              className="text-pink-700 bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold transition"
            >
              ಕ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}