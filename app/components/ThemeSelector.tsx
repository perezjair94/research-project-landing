"use client";

import { useState } from "react";
import { themes, Theme, SubTheme } from "../data/themes";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "w-20 h-20";
      case "medium":
        return "w-28 h-28";
      case "large":
        return "w-36 h-36";
      default:
        return "w-24 h-24";
    }
  };

  const getTextSize = (size: string) => {
    switch (size) {
      case "small":
        return "text-xs";
      case "medium":
        return "text-sm";
      case "large":
        return "text-base";
      default:
        return "text-sm";
    }
  };

  const handleThemeClick = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const handleBackToThemes = () => {
    setSelectedTheme(null);
  };

  if (selectedTheme) {
    return (
      <div className="min-h-[600px] flex items-center justify-center relative overflow-hidden">
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
            className={`${selectedTheme.color}  rounded-full flex items-center justify-center mb-8 shadow-lg`}
          >
            <h3 className="text-white font-bold text-xl text-center px-4">
              {selectedTheme.title}
            </h3>
          </div>

          {/* Subtopics arranged in a circle around the main theme */}
          <div className="relative w-96 h-96">
            {selectedTheme.subthemes.map((subtheme, index) => {
              const angle =
                (index / selectedTheme.subthemes.length) * 2 * Math.PI;
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={subtheme.id}
                  className="absolute bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <span className="text-xs font-semibold text-center px-2 text-black/30">
                    {subtheme.title}
                  </span>
                  <span className="text-xs text-black/30 mt-1">
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
      <div className="absolute inset-0 "></div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')]"></div>
      </div>

      {/* Theme circles container */}
      <div className="relative z-10">
        <div className="relative w-[500px] h-[400px]">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              onClick={() => handleThemeClick(theme)}
              className={`absolute ${theme.color} ${getSizeClass(theme.size)} rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${theme.position.x}px), calc(-50% + ${theme.position.y}px))`,
              }}
            >
              <span
                className={`text-black/30 font-semibold ${getTextSize(theme.size)} text-center px-2`}
              >
                {theme.title}
              </span>
            </div>
          ))}
        </div>

        {/* Instructions text */}
        <div className="text-center mt-8">
          <p className="text-black/50 text-lg font-medium">
            Haz clic en un tema para conocer más.
          </p>
          <p className="text-black/30 text-sm mt-2">
            El tamaño del círculo refleja el número de testimonios por tema.
          </p>
        </div>
      </div>
    </div>
  );
}
