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
  // Estado para manejar el iframe activo
  const [activeIframe, setActiveIframe] = useState<string | null>(testimonials[0]?.link || null);

  // Función para normalizar nombres (quitar tildes y caracteres especiales)
  const normalizeString = (str: string): string => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  // Función para renderizar contenido con nombres clickeables
  const renderContentWithClickableNames = (content: string) => {
    let processedContent = content;
    
    // Para cada testimonio, buscar variaciones del nombre en el contenido
    testimonials.forEach((testimonial) => {
      const testimonialNameNormalized = normalizeString(testimonial.name);
      
      // Buscar tanto el nombre original como versiones normalizadas
      const nameVariations = [
        testimonial.name,
        testimonial.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), // Sin tildes
      ];
      
      nameVariations.forEach((nameVariation) => {
        const nameRegex = new RegExp(`\\b${nameVariation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        processedContent = processedContent.replace(nameRegex, `__CLICKABLE_NAME_${testimonial.name}__`);
      });
    });

    // Dividir el contenido en partes y renderizar
    const parts = processedContent.split(/(__CLICKABLE_NAME_[^_]+__)/);
    
    return parts.map((part, index) => {
      if (part.startsWith('__CLICKABLE_NAME_') && part.endsWith('__')) {
        const name = part.replace('__CLICKABLE_NAME_', '').replace('__', '');
        const testimonial = testimonials.find(t => t.name === name);
        
        return (
          <button
            key={index}
            onClick={() => testimonial?.link && setActiveIframe(testimonial.link)}
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
        <div className="space-y-12">
          {subThemes.map((subTheme, index) => (
            <div key={subTheme.id}>
              {/* Título en barra naranja */}
              <div className="bg-cv-orange/30 inline-block rounded px-3 py-1 mb-6">
                <h3 className="text-xl lg:text-2xl font-bebas text-cv-purple/60">
                  {subTheme.title}
                </h3>
              </div>

              {/* Layout principal con texto a la izquierda e imagen/iframe a la derecha */}
              <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
                {/* Contenido de texto */}
                <div className="text-base lg:text-lg text-black/70 leading-relaxed space-y-4">
                  {subTheme.content.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex}>{renderContentWithClickableNames(paragraph)}</p>
                  ))}
                </div>

                {/* Columna derecha con imagen e iframe */}
                <div className="space-y-4">
                  {/* {subTheme.image && ( */}
                  {/*   <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden"> */}
                  {/*     <Image */}
                  {/*       src={subTheme.image} */}
                  {/*       alt={subTheme.title} */}
                  {/*       fill */}
                  {/*       className="object-cover saturate-[0.7] contrast-125" */}
                  {/*     /> */}
                  {/*     <div className={`absolute inset-0 ${themeOverlayColor}`}></div> */}
                  {/*   </div> */}
                  {/* )} */}

                  {/* Iframe del testimonio activo */}
                  {activeIframe && (
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <iframe
                        src={activeIframe}
                        width="100%"
                        height="200"
                        className="rounded-lg"
                        allow="autoplay"
                        loading="lazy"
                        title="Testimonio"
                        scrolling="no"
                        style={{
                          maxWidth: "570px",
                          margin: "0 auto",
                          display: "block",
                        }}
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
