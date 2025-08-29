"use client";

import React from "react";

interface PhotoStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  author: string;
  imageUrl: string;
  content: string;
}

export default function PhotoStoryModal({
  isOpen,
  onClose,
  author,
  imageUrl,
  content,
}: PhotoStoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-3 px-6 border-b border-neutral-200">
          <h2 className="text-2xl font-bebas text-cv-purple">
            Fotorelato - {author}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 6-12 12" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex justify-center">
          <div className="space-y-4 max-w-2xl">
            <img
              src={imageUrl}
              alt={`Fotorelato de ${author}`}
              className="w-full rounded-lg object-cover shadow-lg max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

