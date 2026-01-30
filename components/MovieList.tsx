import React, { useState } from 'react';
import { Language, Movie } from '../types';
import { MOVIES } from '../constants';
import { Calendar, Star, Search, PlayCircle, ThumbsUp, Info } from 'lucide-react';
import { TrailerModal } from './TrailerModal';

interface Props {
  language: Language;
  onMovieSelect: (movie: Movie) => void;
}

export const MovieList: React.FC<Props> = ({ language, onMovieSelect }) => {
  const isTamil = language === 'ta';
  const [activeTab, setActiveTab] = useState<'now_showing' | 'upcoming'>('now_showing');
  const [search, setSearch] = useState('');
  const [playingTrailer, setPlayingTrailer] = useState<string | null>(null);
  const [interests, setInterests] = useState<Set<string>>(new Set());

  const toggleInterest = (e: React.MouseEvent, movieId: string) => {
    e.stopPropagation();
    const newInterests = new Set(interests);
    if (newInterests.has(movieId)) {
      newInterests.delete(movieId);
    } else {
      newInterests.add(movieId);
    }
    setInterests(newInterests);
  };

  const playTrailer = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    setPlayingTrailer(url);
  };

  const filteredMovies = MOVIES.filter(m => 
    m.status === activeTab &&
    (m.titleEn.toLowerCase().includes(search.toLowerCase()) || 
     m.titleTa.includes(search))
  );

  return (
    <div className="pb-24 animate-fade-in relative min-h-screen">
      {/* Search & Tabs */}
      <div className="sticky top-16 z-40 bg-[#f3f4f6]/95 backdrop-blur-sm pt-4 px-4 pb-2 border-b border-gray-200">
         <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder={isTamil ? "திரைப்படங்களைத் தேடுக..." : "Search movies..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
         </div>

         <div className="flex p-1 bg-gray-200 rounded-lg">
            <button 
              onClick={() => setActiveTab('now_showing')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'now_showing' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
            >
              {isTamil ? "இப்போது" : "Now Showing"}
            </button>
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'upcoming' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
            >
              {isTamil ? "விரைவில்" : "Coming Soon"}
            </button>
         </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {filteredMovies.map((movie) => (
          <div 
            key={movie.id} 
            onClick={() => activeTab === 'now_showing' ? onMovieSelect(movie) : null}
            className={`
                group relative flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden 
                ${activeTab === 'now_showing' ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : 'opacity-90'} 
                transition-all duration-300
            `}
          >
            {/* Poster */}
            <div className="aspect-[2/3] w-full bg-gray-200 relative overflow-hidden">
              <img 
                src={movie.imageUrl} 
                alt={movie.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              
              {/* Rating Badge */}
              {activeTab === 'now_showing' && (
                <div className="absolute bottom-2 left-2 flex flex-col">
                    <div className="flex items-center gap-1 text-white text-sm font-bold drop-shadow-md">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        {movie.rating}/10
                    </div>
                    <span className="text-[10px] text-gray-300">{movie.votes} votes</span>
                </div>
              )}

              {/* Release Date for Upcoming */}
              {activeTab === 'upcoming' && movie.releaseDate && (
                 <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
                    {movie.releaseDate}
                 </div>
              )}

              {/* Trailer Button Overlay */}
              {movie.trailerUrl && (
                <button 
                    onClick={(e) => playTrailer(e, movie.trailerUrl!)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 hover:text-white border-2 border-white/50"
                >
                    <PlayCircle className="w-8 h-8 text-white" />
                </button>
              )}
            </div>
            
            {/* Info */}
            <div className="p-3 flex flex-col flex-1">
              <h3 className="font-bold text-gray-900 truncate text-lg leading-tight">
                {isTamil ? movie.titleTa : movie.titleEn}
              </h3>
              <p className="text-xs text-gray-500 mt-1 truncate">{movie.genre}</p>
              
              <div className="mt-auto pt-3 flex items-center justify-between">
                 <span className="text-[10px] uppercase font-bold text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">
                    {movie.language}
                 </span>
                 
                 {/* Action Buttons */}
                 {activeTab === 'upcoming' ? (
                     <button 
                        onClick={(e) => toggleInterest(e, movie.id)}
                        className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded transition-colors ${interests.has(movie.id) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                     >
                        <ThumbsUp className={`w-3 h-3 ${interests.has(movie.id) ? 'fill-current' : ''}`} />
                        {interests.has(movie.id) ? 'Interested' : 'Interest'}
                     </button>
                 ) : (
                    <span className="text-xs text-red-600 font-semibold group-hover:underline">Book</span>
                 )}
              </div>
            </div>
          </div>
        ))}

        {filteredMovies.length === 0 && (
            <div className="col-span-2 py-12 flex flex-col items-center text-gray-400">
                <Info className="w-12 h-12 mb-2 opacity-50" />
                <p>No movies found</p>
            </div>
        )}
      </div>

      {playingTrailer && (
        <TrailerModal trailerId={playingTrailer} onClose={() => setPlayingTrailer(null)} />
      )}
    </div>
  );
};
