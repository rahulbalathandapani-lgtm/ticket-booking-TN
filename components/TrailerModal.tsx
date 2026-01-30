import React from 'react';
import { X } from 'lucide-react';

interface Props {
  trailerId: string;
  onClose: () => void;
}

export const TrailerModal: React.FC<Props> = ({ trailerId, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 animate-fade-in backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-black rounded-xl overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="aspect-video w-full">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`} 
            title="Movie Trailer" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
