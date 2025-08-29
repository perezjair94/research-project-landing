'use client';

import React, { useState } from 'react';
import TestimonialsContainer from './TestimonialsContainer';
import { Testimonial } from '../types/themes';

// Ejemplo de datos para demostrar múltiples fotorelatos por autor por subtema
const exampleTestimonials: Testimonial[] = [
  {
    name: "María Mercedes",
    quote: "La ciudadela es un lugar propicio para el encuentro entre vecinos y sus mascotas. Mis perros han hecho muchos amigos aquí.",
    audio: "convivencia-maria-mercedes.mp3",
    link: "https://embed.lvn.org/?hid=5259123",
    subtopic: "manejo-mascotas",
    photoStories: [
      {
        id: "maria-mascotas-1",
        imageUrl: "/images/fotorelatos/convivencia/maria-mascotas-parque.jpg",
        content: "María fotografió a su perro jugando en el parque con otros perros del vecindario. Este espacio se ha convertido en un punto de encuentro para los dueños de mascotas.",
        subtopic: "manejo-mascotas"
      },
      {
        id: "maria-mascotas-2", 
        imageUrl: "/images/fotorelatos/convivencia/maria-mascotas-caminata.jpg",
        content: "Durante las caminatas matutinas, María documentó cómo los vecinos han creado rutinas compartidas para el ejercicio de sus mascotas.",
        subtopic: "manejo-mascotas"
      }
    ]
  },
  {
    name: "María Mercedes",
    quote: "Los espacios comunes necesitan más cuidado y atención de todos nosotros.",
    subtopic: "espacios-comunes",
    photoStories: [
      {
        id: "maria-espacios-1",
        imageUrl: "/images/fotorelatos/convivencia/maria-espacios-deterioro.jpg", 
        content: "María capturó el deterioro de algunos espacios comunes y propone soluciones comunitarias para su mantenimiento.",
        subtopic: "espacios-comunes"
      }
    ]
  },
  {
    name: "Paola",
    quote: "Me lleva mucho tiempo salir hasta la estación Terreros al tener que tomar doble transporte.",
    audio: "transporte-paola.mp3",
    link: "https://embed.lvn.org/?hid=5259456",
    subtopic: "oferta-rutas",
    photoStories: [
      {
        id: "paola-transporte-1",
        imageUrl: "/images/fotorelatos/transporte/paola-ruta-terreros.jpg",
        content: "Paola documentó su ruta diaria hacia la estación Terreros, mostrando los múltiples transbordos necesarios.",
        subtopic: "oferta-rutas"
      },
      {
        id: "paola-transporte-2",
        imageUrl: "/images/fotorelatos/transporte/paola-tiempo-espera.jpg", 
        content: "El tiempo de espera en las paradas es uno de los principales problemas que afecta la movilidad diaria.",
        subtopic: "oferta-rutas"
      }
    ]
  },
  {
    name: "Paola",
    quote: "Los costos de transporte representan una parte significativa del presupuesto familiar.",
    subtopic: "costos",
    photoStories: [
      {
        id: "paola-costos-1",
        imageUrl: "/images/fotorelatos/transporte/paola-costos-diarios.jpg",
        content: "Paola llevó un registro fotográfico de los gastos diarios de transporte para mostrar el impacto económico.",
        subtopic: "costos"
      }
    ]
  }
];

interface TestimonialsExampleProps {
  activeSubtopic?: string;
}

export default function TestimonialsExample({ activeSubtopic }: TestimonialsExampleProps) {
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>(activeSubtopic || 'manejo-mascotas');

  const subtopics = [
    { id: 'manejo-mascotas', title: 'Manejo de Mascotas' },
    { id: 'espacios-comunes', title: 'Espacios Comunes' },
    { id: 'oferta-rutas', title: 'Oferta de Rutas' },
    { id: 'costos', title: 'Costos de Transporte' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bebas text-cv-purple mb-4">
          Ejemplo: Testimonios con Múltiples Fotorelatos
        </h2>
        <p className="text-gray-600 mb-6">
          Cada autor puede tener múltiples testimonios y fotorelatos por subtema. 
          Selecciona un subtema para ver los testimonios filtrados.
        </p>
        
        {/* Selector de subtemas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {subtopics.map(subtopic => (
            <button
              key={subtopic.id}
              onClick={() => setSelectedSubtopic(subtopic.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedSubtopic === subtopic.id
                  ? 'bg-cv-purple text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-cv-purple/10'
              }`}
            >
              {subtopic.title}
            </button>
          ))}
        </div>
      </div>

      <TestimonialsContainer
        testimonials={exampleTestimonials}
        activeSubtopic={selectedSubtopic}
        themeOverlayColor="#f3f4f6"
        onIframeChange={(iframeUrl) => console.log('Cambiar iframe:', iframeUrl)}
      />
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Características implementadas:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>✅ Testimonios individuales por autor</li>
          <li>✅ Múltiples fotorelatos por autor por subtema</li>
          <li>✅ Filtrado por subtema activo</li>
          <li>✅ Consolidación de testimonios del mismo autor</li>
          <li>✅ Integración con modales de fotorelatos existentes</li>
          <li>✅ Soporte para audio e iframes</li>
        </ul>
      </div>
    </div>
  );
}