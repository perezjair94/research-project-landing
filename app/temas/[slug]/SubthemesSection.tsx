"use client";
import React, { useState } from "react";

interface SubTheme {
  id: string;
  title: string;
  content: string;
  image?: string;
}

interface Testimonial {
  name: string;
  quote: string;
  audio?: string;
  link?: string;
}

interface SubthemesSectionProps {
  subThemes: SubTheme[];
  testimonials: Testimonial[];
  themeOverlayColor: string;
}

export default function SubthemesSection({
  subThemes,
  testimonials,
  themeOverlayColor,
}: SubthemesSectionProps) {
  // Estado para manejar el subtema activo
  const [activeSubthemeIndex, setActiveSubthemeIndex] = useState<number>(0);
  // Estado para manejar el iframe activo específicamente
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  // Iframe por defecto (el primero disponible)
  const defaultIframe = testimonials[0]?.link || null;

  // Función para obtener el iframe actual (activo o por defecto del subtema)
  const getCurrentIframe = (): string | null => {
    // Si hay un iframe específicamente seleccionado, usarlo
    if (activeIframe) {
      return activeIframe;
    }

    // Sino, usar el mapeo por defecto del subtema activo
    return getSubthemeDefaultIframe(activeSubthemeIndex);
  };

  // Función para obtener el iframe por defecto de un subtema específico
  const getSubthemeDefaultIframe = (subthemeIndex: number): string | null => {
    const subtheme = subThemes[subthemeIndex];
    if (!subtheme) return defaultIframe;

    // Mapeo específico de subtemas a testimonios basado en el contenido
    const subthemeToTestimonialMap: { [key: string]: string } = {
      // Convivencia
      "manejo-mascotas": "María Mercedes", // menciona mascotas
      "ruido-volumen": "Blanca", // menciona ruido/apartamentos
      "solucion-conflictos": "Katherine", // menciona conflictos/multas

      // Transporte
      costos: "Nubia", // menciona doble transporte
      "transporte-pirata": "Linda", // menciona carros piratas
      "oferta-rutas": "Paola", // menciona rutas/tiempo

      // Espacio Público
      "areas-verdes": "Claribel", // menciona parques/picnic
      "recreacion-deporte": "Vicente", // menciona parque de lectura

      // Seguridad
      robos: "Mercedes", // menciona robo en SITP

      // Otros temas específicos
      "grupos-poblacionales": "Roberto Díaz",
      "calidad-de-vida": "Elena Vargas",
      gobernanza: "Miguel Castillo",
      infraestructura: "Carmen López",
    };

    const associatedTestimonialName = subthemeToTestimonialMap[subtheme.id];
    if (associatedTestimonialName) {
      const testimonial = testimonials.find(
        (t) => t.name === associatedTestimonialName,
      );
      if (testimonial?.link) {
        return testimonial.link;
      }
    }

    // Si no hay mapeo específico, usar el iframe por defecto
    return defaultIframe;
  };

  // Función para renderizar contenido con nombres clickeables (mantener funcionalidad existente)
  const renderContentWithClickableNames = (content: string) => {
    let processedContent = content;

    testimonials.forEach((testimonial) => {
      const nameVariations = [
        testimonial.name,
        testimonial.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), // Sin tildes
      ];

      nameVariations.forEach((nameVariation) => {
        const nameRegex = new RegExp(
          `\\b${nameVariation.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
          "gi",
        );
        processedContent = processedContent.replace(
          nameRegex,
          `__CLICKABLE_NAME_${testimonial.name}__`,
        );
      });
    });

    const parts = processedContent.split(/(__CLICKABLE_NAME_[^_]+__)/);

    return parts.map((part, index) => {
      if (part.startsWith("__CLICKABLE_NAME_") && part.endsWith("__")) {
        const name = part.replace("__CLICKABLE_NAME_", "").replace("__", "");
        const testimonial = testimonials.find((t) => t.name === name);

        return (
          <button
            key={index}
            onClick={() => {
              if (testimonial?.link) {
                // Buscar el índice del subtema que corresponde a este testimonio
                const subthemeIndex = subThemes.findIndex((subtheme) => {
                  const content = subtheme.content.toLowerCase();
                  const nameLower = name.toLowerCase();
                  const nameNoTildes = name
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();
                  return (
                    content.includes(nameLower) ||
                    content.includes(nameNoTildes)
                  );
                });

                if (subthemeIndex >= 0) {
                  setActiveSubthemeIndex(subthemeIndex);
                }
                
                // Establecer el iframe específico de la persona clickeada
                setActiveIframe(testimonial.link);
              }
            }}
            className="text-cv-purple font-semibold hover:text-cv-pink transition-colors cursor-pointer underline"
          >
            {name}
          </button>
        );
      }
      return part;
    });
  };

  console.log(getCurrentIframe());

  return (
    <section className="px-6 lg:px-16 py-12 bg-gray-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Layout principal con subtemas a la izquierda e iframe a la derecha */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Columna izquierda - Subtemas */}
          <div className="space-y-12">
            {subThemes.map((subTheme, index) => (
              <div key={subTheme.id}>
                {/* Título en barra naranja - ahora clickeable */}
                <div className="bg-cv-orange/30 inline-block rounded px-3 py-1 mb-6">
                  <button
                    onClick={() => {
                      setActiveSubthemeIndex(index);
                      // Limpiar iframe específico para usar el por defecto del subtema
                      setActiveIframe(null);
                    }}
                    className={`text-xl lg:text-2xl font-bebas transition-colors cursor-pointer ${
                      activeSubthemeIndex === index
                        ? "text-cv-pink"
                        : "text-cv-purple/60 hover:text-cv-pink"
                    }`}
                  >
                    {subTheme.title}
                  </button>
                </div>

                {/* Contenido de texto */}
                <div className="text-base lg:text-lg text-black/70 leading-relaxed space-y-4">
                  {subTheme.content.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex}>
                      {renderContentWithClickableNames(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha - Iframe fijo */}
          <div className="lg:sticky lg:top-8 space-y-4">
            {/* Iframe del subtema activo */}
            {getCurrentIframe() && (
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="p-3 bg-cv-purple/10 text-sm text-cv-purple/70 font-medium">
                  Testimonio: {subThemes[activeSubthemeIndex]?.title}
                </div>
                <iframe
                  src={getCurrentIframe()!}
                  width="100%"
                  height="200"
                  className="rounded-lg"
                  allow="autoplay"
                  loading="lazy"
                  title={`Testimonio - ${subThemes[activeSubthemeIndex]?.title}`}
                  scrolling="no"
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                    display: "block",
                  }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
