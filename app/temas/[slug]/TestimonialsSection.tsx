"use client";
import React from "react";

interface Testimonial {
  name: string;
  quote: string;
  audio?: string;
  link?: string;
}

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeTestimonial, setActiveTestimonial] = React.useState<string | null>(null);
  
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-cv-purple/70">Testimonios</h4>
      <div className="space-y-3">
        {testimonials.map((testimonial, tIndex) => (
          <div key={tIndex} className="bg-white p-4 rounded-lg border border-gray-200">
            <button
              onClick={() => setActiveTestimonial(testimonial.link || null)}
              className="text-cv-purple font-semibold hover:text-cv-pink transition-colors cursor-pointer text-left"
            >
              {testimonial.name}
            </button>
            <p className="text-sm text-gray-600 mt-1 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
      
      {/* Iframe del testimonio activo */}
      {activeTestimonial && (
        <div className="mt-4 bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src={activeTestimonial}
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-lg"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Testimonio seleccionado"
          ></iframe>
        </div>
      )}
    </div>
  );
}