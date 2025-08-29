'use client';

import React, { useState } from 'react';
import { PhotoStory, Testimonial } from '../types/themes';
import PhotoStoryModal from './PhotoStoryModal';

interface IndividualTestimonialProps {
  testimonial: Testimonial;
  onAudioClick?: (audioUrl: string) => void;
  onIframeChange?: (iframeUrl: string) => void;
}

export default function IndividualTestimonial({ 
  testimonial, 
  onAudioClick, 
  onIframeChange 
}: IndividualTestimonialProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    photoStory: PhotoStory | null;
  }>({
    isOpen: false,
    photoStory: null
  });

  const openPhotoStoryModal = (photoStory: PhotoStory) => {
    setModalState({
      isOpen: true,
      photoStory
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      photoStory: null
    });
  };

  const handleNameClick = () => {
    if (testimonial.link && onIframeChange) {
      onIframeChange(testimonial.link);
    }
  };

  const handleAudioClick = () => {
    if (testimonial.audio && onAudioClick) {
      onAudioClick(testimonial.audio);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      {/* Modal de fotorelatos */}
      {modalState.photoStory && (
        <PhotoStoryModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          author={testimonial.name}
          imageUrl={modalState.photoStory.imageUrl}
          content={modalState.photoStory.content}
        />
      )}

      {/* Encabezado del testimonio */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleNameClick}
          className="text-lg font-semibold text-cv-purple hover:text-cv-pink transition-colors cursor-pointer"
        >
          {testimonial.name}
        </button>
        
        {testimonial.audio && (
          <button
            onClick={handleAudioClick}
            className="p-2 text-cv-orange hover:text-cv-pink transition-colors"
            title="Reproducir audio"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        )}
      </div>

      {/* Cita del testimonio */}
      <blockquote className="text-gray-700 mb-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Foto relatos */}
      {testimonial.photoStories && testimonial.photoStories.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-cv-purple">Fotorelatos:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {testimonial.photoStories.map((photoStory, index) => (
              <button
                key={photoStory.id}
                onClick={() => openPhotoStoryModal(photoStory)}
                className="relative group overflow-hidden rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <img
                  src={photoStory.imageUrl}
                  alt={`Fotorelato ${index + 1} de ${testimonial.name}`}
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-photo.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                {photoStory.subtopic && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                    <p className="text-white text-xs truncate">{photoStory.subtopic}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}