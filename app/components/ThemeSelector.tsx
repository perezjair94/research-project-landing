"use client";

import { useState } from "react";
import { themes, Theme, SubTheme } from "../data/themes";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20";
      case "medium":
        return "w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-28 lg:h-28";
      case "large":
        return "w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36";
      default:
        return "w-22 h-22 sm:w-22 sm:h-22 md:w-22 md:h-22 lg:w-24 lg:h-24";
    }
  };

  const getTextSize = (size: string) => {
    switch (size) {
      case "small":
        return "text-xs lg:text-xs md:text-xs sm:text-xs";
      case "medium":
        return "text-sm lg:text-sm md:text-sm sm:text-xs";
      case "large":
        return "text-base lg:text-base md:text-sm sm:text-sm";
      default:
        return "text-sm lg:text-sm md:text-xs sm:text-xs";
    }
  };

  const getScaledPosition = (x: number, y: number) => {
    // Escala las posiciones para diferentes tamaños de pantalla
    const lgScale = 1; // Tamaño completo para lg
    const mdScale = 0.8; // 80% para tablets
    const smScale = 0.75; // 75% para móviles (aumentado para más separación)

    return {
      lg: { x: x * lgScale, y: y * lgScale },
      md: { x: x * mdScale, y: y * mdScale },
      sm: { x: x * smScale, y: y * smScale },
    };
  };

  const handleThemeClick = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const handleBackToThemes = () => {
    setSelectedTheme(null);
  };

  if (selectedTheme) {
    return (
      <div className="md:min-h-[600px] flex items-center justify-center relative overflow-hidden">
        {/* Background overlay matching the theme color */}
        <div
          className={`absolute inset-0 ${selectedTheme.color} opacity-20`}
        ></div>

        {/* Back button */}
        <button
          onClick={handleBackToThemes}
          className="absolute top-4 left-4 text-white bg-black/20 hover:bg-black/30 rounded-full p-2 transition-colors z-10"
        >
          <svg
            className="w-6 h-6"
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

        {/* Selected theme content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Central theme circle */}
          <div
            className={`${selectedTheme.color}  rounded-full flex items-center justify-center mb-8`}
          >
            <h3 className="text-white font-bold text-xl text-center px-4">
              {selectedTheme.title}
            </h3>
          </div>

          {/* Subtopics arranged in a circle around the main theme */}
          <div className="relative w-64 h-64 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {selectedTheme.subthemes.map((subtheme, index) => {
              const angle =
                (index / selectedTheme.subthemes.length) * 2 * Math.PI;
              const radius = 80; // Reducido para móvil
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={subtheme.id}
                  className="absolute bg-white rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <span className="text-xs sm:text-xs md:text-xs lg:text-xs font-semibold text-center px-1 sm:px-1 md:px-2 text-black/30">
                    {subtheme.title}
                  </span>
                  <span className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs text-black/30 mt-1">
                    ({subtheme.highlights} testimonios)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[600px] flex items-center justify-center relative">
      {/* Background with dark teal pattern */}
      <div className="absolute inset-0"></div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')]"></div>
      </div>

      {/* Theme circles container */}
      <div className="relative z-10">
        <div className="relative mx-auto w-[380px] h-[360px] sm:w-[380px] sm:h-[360px] md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[400px]">
          {themes.map((theme, index) => {
            const scaledPos = getScaledPosition(
              theme.position.x,
              theme.position.y,
            );
            return (
              <div
                key={theme.id}
                onClick={() => handleThemeClick(theme)}
                className={`absolute ${theme.color} ${getSizeClass(theme.size)} rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                style={
                  {
                    left: "50%",
                    top: "50%",
                    "--sm-x": `${scaledPos.sm.x}px`,
                    "--sm-y": `${scaledPos.sm.y}px`,
                    "--md-x": `${scaledPos.md.x}px`,
                    "--md-y": `${scaledPos.md.y}px`,
                    "--lg-x": `${scaledPos.lg.x}px`,
                    "--lg-y": `${scaledPos.lg.y}px`,
                    transform: `translate(calc(-50% + var(--sm-x)), calc(-50% + var(--sm-y)))`,
                  } as React.CSSProperties
                }
              >
                <span
                  className={`text-black/30 font-semibold ${getTextSize(theme.size)} text-center px-1 sm:px-1 md:px-2`}
                >
                  {theme.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Instructions text */}
        <div className="text-center mt-4 sm:mt-6 md:mt-8 px-4">
          <p className="text-black/50 text-sm sm:text-base md:text-lg font-medium">
            Haz clic en un tema para conocer más.
          </p>
          <p className="text-black/30 text-xs sm:text-sm mt-1 sm:mt-2">
            El tamaño del círculo refleja el número de testimonios por tema.
          </p>
        </div>
      </div>
    </div>
  );
}
