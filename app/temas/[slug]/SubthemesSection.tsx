"use client";
import React from "react";
import Image from "next/image";

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
  // Usar el primer testimonio por defecto para el iframe
  const defaultIframe = testimonials[0]?.link || null;

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
                    <p key={pIndex}>{paragraph}</p>
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

                  {/* Iframe del testimonio por defecto */}
                  {defaultIframe && (
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <iframe
                        src={defaultIframe}
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
