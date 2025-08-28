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
  themeId: string;
}

export default function SubthemesSection({
  subThemes,
  testimonials,
  themeOverlayColor,
  themeId,
}: SubthemesSectionProps) {
  // Estado para manejar el subtema activo
  const [activeSubthemeIndex, setActiveSubthemeIndex] = useState<number>(0);
  // Estado para manejar el iframe activo específicamente
  const [activeIframe, setActiveIframe] = useState<string | null>(null);
  // Estado para trackear qué testimonio específico está seleccionado para cada autor
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState<{
    [authorName: string]: number;
  }>({});

  // Iframe por defecto (el primero disponible)
  const defaultIframe = testimonials[0]?.link || null;

  // Función para asociar testimonios con subtemas basándose en el contenido y contexto
  const getTestimonialSubthemeAssociation = (
    testimonial: Testimonial,
  ): string | null => {
    const quote = testimonial.quote.toLowerCase();

    // Mapeo basado en palabras clave específicas y contexto del testimonio
    if (
      quote.includes("ruta") ||
      quote.includes("conectividad") ||
      (quote.includes("terreros") && quote.includes("tiempo"))
    ) {
      return "oferta-rutas";
    }
    if (
      quote.includes("pagar") ||
      quote.includes("doble transporte") ||
      quote.includes("subsidiar") ||
      quote.includes("alcaldía")
    ) {
      return "costos";
    }
    if (
      quote.includes("pirata") ||
      quote.includes("insultaron") ||
      quote.includes("asustara") ||
      quote.includes("conductor")
    ) {
      return "transporte-pirata";
    }
    if (
      quote.includes("conexi") ||
      quote.includes("vial") ||
      quote.includes("malla") ||
      quote.includes("trayecto") ||
      quote.includes("oportunidad") ||
      quote.includes("transmilenio") ||
      quote.includes("más vías") ||
      quote.includes("rutas alternas")
    ) {
      return "conectividad";
    }

    // Mapeos específicos por contenido del subtema para otros temas
    if (
      quote.includes("mascota") ||
      quote.includes("perro") ||
      quote.includes("vacunación")
    ) {
      return "manejo-mascotas";
    }
    if (
      quote.includes("ruido") ||
      quote.includes("volumen") ||
      quote.includes("multar")
    ) {
      return "ruido-volumen";
    }
    if (
      quote.includes("parque") ||
      (quote.includes("espacio") && quote.includes("común"))
    ) {
      return "espacios-comunes";
    }
    if (
      quote.includes("conflicto") ||
      quote.includes("comunicación") ||
      quote.includes("amenaza")
    ) {
      return "solucion-conflictos";
    }

    return null;
  };

  // Función para obtener testimonios de un autor filtrados por subtema actual
  const getTestimonialsForAuthorInCurrentSubtheme = (authorName: string) => {
    const currentSubtheme = subThemes[activeSubthemeIndex];
    if (!currentSubtheme) return [];

    return testimonials.filter(
      (t) =>
        t.name === authorName &&
        getTestimonialSubthemeAssociation(t) === currentSubtheme.id,
    );
  };

  // Función para obtener el testimonio correcto para un autor en el subtema actual
  const getTestimonialForAuthor = (authorName: string) => {
    // Primero intentar obtener testimonios del subtema actual
    const subthemeTestimonials =
      getTestimonialsForAuthorInCurrentSubtheme(authorName);

    if (subthemeTestimonials.length > 0) {
      const currentIndex =
        selectedTestimonialIndex[
          `${authorName}_${subThemes[activeSubthemeIndex].id}`
        ] || 0;
      return subthemeTestimonials[currentIndex] || subthemeTestimonials[0];
    }

    // Si no hay testimonios específicos del subtema, usar todos los testimonios del autor
    const allTestimonials = testimonials.filter((t) => t.name === authorName);
    if (allTestimonials.length === 0) return null;

    const currentIndex = selectedTestimonialIndex[authorName] || 0;
    return allTestimonials[currentIndex] || allTestimonials[0];
  };

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
      const testimonial = getTestimonialForAuthor(associatedTestimonialName);
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
        const testimonial = getTestimonialForAuthor(name);

        return (
          <button
            key={index}
            onClick={() => {
              if (testimonial?.link) {
                // Obtener testimonios del autor en el subtema actual
                const subthemeTestimonials =
                  getTestimonialsForAuthorInCurrentSubtheme(name);

                if (subthemeTestimonials.length > 1) {
                  // Rotar entre testimonios del subtema actual
                  const currentSubthemeKey = `${name}_${subThemes[activeSubthemeIndex].id}`;
                  const currentIndex =
                    selectedTestimonialIndex[currentSubthemeKey] || 0;
                  const nextIndex =
                    (currentIndex + 1) % subthemeTestimonials.length;
                  setSelectedTestimonialIndex((prev) => ({
                    ...prev,
                    [currentSubthemeKey]: nextIndex,
                  }));
                } else if (subthemeTestimonials.length === 0) {
                  // Si no hay testimonios en el subtema actual, buscar el subtema correcto
                  const testimonialSubtheme =
                    getTestimonialSubthemeAssociation(testimonial);
                  if (testimonialSubtheme) {
                    const subthemeIndex = subThemes.findIndex(
                      (s) => s.id === testimonialSubtheme,
                    );
                    if (subthemeIndex >= 0) {
                      setActiveSubthemeIndex(subthemeIndex);
                      // También rotar si hay múltiples en el nuevo subtema
                      const newSubthemeTestimonials = testimonials.filter(
                        (t) =>
                          t.name === name &&
                          getTestimonialSubthemeAssociation(t) ===
                            testimonialSubtheme,
                      );
                      if (newSubthemeTestimonials.length > 1) {
                        const currentSubthemeKey = `${name}_${testimonialSubtheme}`;
                        const currentIndex =
                          selectedTestimonialIndex[currentSubthemeKey] || 0;
                        const nextIndex =
                          (currentIndex + 1) % newSubthemeTestimonials.length;
                        setSelectedTestimonialIndex((prev) => ({
                          ...prev,
                          [currentSubthemeKey]: nextIndex,
                        }));
                      }
                    }
                  }
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

          {/* Columna derecha - Iframe fijo e Ilustraciones */}
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

            {/* Ilustraciones */}
            <div className="space-y-4 mt-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex justify-center">
                  <img 
                    src={`/images/illustrations/${themeId}/illustration-${num}.png`} 
                    alt={`Ilustración ${num}`} 
                    className="max-w-full h-auto rounded-lg shadow-md"
                    style={{ maxWidth: "250px" }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
