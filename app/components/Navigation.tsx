"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Theme {
  id: string;
  title: string;
  description: string;
}

const themes: Theme[] = [
  {
    id: "convivencia",
    title: "Convivencia",
    description: "Vida en comunidad y relaciones vecinales",
  },
  {
    id: "transporte",
    title: "Transporte",
    description: "Movilidad y conectividad",
  },
  {
    id: "espacio-publico",
    title: "Espacio Público",
    description: "Parques, plazas y áreas comunes",
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description: "Percepción de seguridad",
  },
  {
    id: "grupos-poblacionales",
    title: "Grupos poblacionales",
    description: "Diversidad demográfica",
  },
  {
    id: "calidad-de-vida",
    title: "Calidad de Vida",
    description: "Bienestar general",
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    description: "Participación ciudadana",
  },
  {
    id: "infraestructura",
    title: "Infraestructura",
    description: "Servicios públicos",
  },
];

interface NavigationProps {
  currentPage?: "home" | "temas" | "nosotros";
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemesExpanded, setIsThemesExpanded] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsThemesExpanded(false);
  };

  const toggleThemesExpanded = () => {
    setIsThemesExpanded(!isThemesExpanded);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsThemesExpanded(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="px-6 lg:px-10 py-6 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={250}
          height={180}
          className="h-8 lg:h-20 w-auto"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex py-1 rounded gap-6 lg:gap-8">
          <Link
            href="/"
            className={`font-bold text-lg lg:text-xl transition-colors ${
              currentPage === "home"
                ? "text-cv-pink border-b-2 border-cv-pink"
                : "text-black/30 hover:text-cv-pink/80"
            }`}
          >
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/temas"
              className={`font-bold text-lg lg:text-xl transition-colors ${
                currentPage === "temas"
                  ? "text-cv-pink border-b-2 border-cv-pink"
                  : "text-black/30 hover:text-cv-pink/80"
              }`}
            >
              Temas
            </Link>

            {/* Desktop Submenu */}
            <div
              ref={submenuRef}
              className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${
                isSubmenuOpen
                  ? "opacity-100 visible transform translate-y-0"
                  : "opacity-0 invisible transform -translate-y-2"
              }`}
            >
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-bebas text-lg text-cv-purple/80 mb-1">
                    Explora los Temas
                  </h3>
                  <p className="text-sm text-black/50">
                    8 temas principales identificados por los residentes
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {themes.map((theme) => (
                    <Link
                      key={theme.id}
                      href={`/temas/${theme.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm text-black/70 group-hover:text-cv-pink transition-colors">
                          {theme.title}
                        </span>
                        <span className="text-xs text-black/50 mt-1">
                          {theme.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <Link
                    href="/temas"
                    className="block text-center text-sm font-semibold text-cv-pink hover:text-cv-pink/80 transition-colors"
                  >
                    Ver todos los temas →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/nosotros"
            className={`font-bold text-lg lg:text-xl transition-colors ${
              currentPage === "nosotros"
                ? "text-cv-pink border-b-2 border-cv-pink"
                : "text-black/30 hover:text-cv-pink/80"
            }`}
          >
            ¿Quiénes somos?
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black/70 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black/70 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black/70 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bebas text-cv-purple/80">Navegación</h2>
            <button
              onClick={closeMobileMenu}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-black/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors ${
                currentPage === "home"
                  ? "text-cv-pink bg-cv-pink/10"
                  : "text-black/70 hover:text-cv-pink hover:bg-cv-pink/5"
              }`}
            >
              Inicio
            </Link>

            {/* Temas with Expandable Submenu */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/temas"
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors flex-1 ${
                    currentPage === "temas"
                      ? "text-cv-pink bg-cv-pink/10"
                      : "text-black/70 hover:text-cv-pink hover:bg-cv-pink/5"
                  }`}
                >
                  Temas
                </Link>
                <button
                  onClick={toggleThemesExpanded}
                  className="p-2 text-black/50 hover:text-cv-pink transition-colors"
                  aria-label="Toggle themes submenu"
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isThemesExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Themes Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isThemesExpanded
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 mt-2 space-y-2">
                  {themes.map((theme) => (
                    <Link
                      key={theme.id}
                      href={`/temas/${theme.id}`}
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 rounded-lg text-sm text-black/60 hover:text-cv-pink hover:bg-cv-pink/5 transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{theme.title}</span>
                        <span className="text-xs text-black/40 mt-1">
                          {theme.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/nosotros"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors ${
                currentPage === "nosotros"
                  ? "text-cv-pink bg-cv-pink/10"
                  : "text-black/70 hover:text-cv-pink hover:bg-cv-pink/5"
              }`}
            >
              ¿Quiénes somos?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

