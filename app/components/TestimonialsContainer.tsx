'use client';

import React, { useState } from 'react';
import { Testimonial } from '../types/themes';
import IndividualTestimonial from './IndividualTestimonial';

interface TestimonialsContainerProps {
  testimonials: Testimonial[];
  activeSubtopic?: string;
  themeOverlayColor?: string;
  onIframeChange?: (iframeUrl: string) => void;
}

export default function TestimonialsContainer({ 
  testimonials, 
  activeSubtopic,
  onIframeChange 
}: TestimonialsContainerProps) {
  const [activeAudio, setActiveAudio] = useState<string | null>(null);

  // Filtrar testimonios por subtema activo si se especifica
  const filteredTestimonials = activeSubtopic 
    ? testimonials.filter(testimonial => 
        testimonial.subtopic === activeSubtopic || !testimonial.subtopic
      )
    : testimonials;

  // Agrupar testimonios por autor
  const testimonialsByAuthor = filteredTestimonials.reduce((acc, testimonial) => {
    if (!acc[testimonial.name]) {
      acc[testimonial.name] = [];
    }
    acc[testimonial.name].push(testimonial);
    return acc;
  }, {} as Record<string, Testimonial[]>);

  // Combinar testimonios múltiples del mismo autor en uno solo con múltiples foto relatos
  const consolidatedTestimonials: Testimonial[] = Object.entries(testimonialsByAuthor).map(
    ([, authorTestimonials]) => {
      if (authorTestimonials.length === 1) {
        return authorTestimonials[0];
      }

      // Combinar múltiples testimonios del mismo autor
      const mainTestimonial = authorTestimonials[0];
      const allPhotoStories = authorTestimonials
        .filter(t => t.photoStories && t.photoStories.length > 0)
        .flatMap(t => t.photoStories || []);

      return {
        ...mainTestimonial,
        quote: authorTestimonials.map(t => t.quote).join(' | '), // Combinar citas si hay múltiples
        photoStories: allPhotoStories.length > 0 ? allPhotoStories : undefined
      };
    }
  );

  const handleAudioPlay = (audioUrl: string) => {
    // Aquí podrías implementar la lógica de reproducción de audio
    setActiveAudio(audioUrl);
    console.log('Reproducir audio:', audioUrl);
  };

  if (consolidatedTestimonials.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay testimonios disponibles para este subtema.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bebas text-cv-purple">
          Testimonios
          {activeSubtopic && (
            <span className="text-cv-orange ml-2">({activeSubtopic})</span>
          )}
        </h3>
        <span className="text-sm text-gray-600">
          {consolidatedTestimonials.length} testimonio{consolidatedTestimonials.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {consolidatedTestimonials.map((testimonial, index) => (
          <IndividualTestimonial
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
            onAudioClick={handleAudioPlay}
            onIframeChange={onIframeChange}
          />
        ))}
      </div>

      {/* Indicador de audio activo */}
      {activeAudio && (
        <div className="fixed bottom-4 right-4 bg-cv-purple text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-pulse w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm">Reproduciendo audio...</span>
            <button 
              onClick={() => setActiveAudio(null)}
              className="text-white hover:text-cv-orange"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}