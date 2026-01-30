import React, { useMemo, useState } from 'react';
import { Language, Movie, Theater, ShowTime, City } from '../types';
import { THEATERS, generateShowtimes } from '../constants';
import { MapPin, Navigation, Search } from 'lucide-react';

interface Props {
  language: Language;
  selectedMovie: Movie;
  selectedCity: City | null;
  onShowtimeSelect: (theater: Theater, showtime: ShowTime) => void;
}

export const TheaterList: React.FC<Props> = ({ language, selectedMovie, selectedCity, onShowtimeSelect }) => {
  const isTamil = language === 'ta';
  const [search, setSearch] = useState('');

  // 1. Filter theaters by the selected city
  // 2. Generate showtimes
  // 3. Filter by search term
  const filteredTheaters = useMemo(() => {
    let theaters = THEATERS;

    // Filter by city if selected
    if (selectedCity) {
      theaters = theaters.filter(t => t.cityId === selectedCity.id);
    }

    return theaters.map(theater => ({
      ...theater,
      showtimes: generateShowtimes(theater.id)
    })).filter(t => 
       t.nameEn.toLowerCase().includes(search.toLowerCase()) || 
       t.nameTa.includes(search)
    );
  }, [selectedCity, search]);

  const openMap = (theater: Theater) => {
    const query = `${theater.nameEn}, ${theater.location}`;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="p-4 space-y-4 pb-24 animate-fade-in">
      {/* Movie Header Card */}
      <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg mb-2 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
             <img src={selectedMovie.imageUrl} className="h-full w-full object-cover mask-image-gradient" />
        </div>
        <div className="relative z-10">
            <h2 className="text-2xl font-bold leading-tight">{isTamil ? selectedMovie.titleTa : selectedMovie.titleEn}</h2>
            <div className="flex items-center gap-2 mt-2 text-gray-300 text-sm">
                <span className="bg-gray-800 px-2 py-0.5 rounded border border-gray-700">{selectedMovie.rating} ★</span>
                <span>{selectedMovie.genre}</span>
                <span>•</span>
                <span>{selectedMovie.duration}</span>
            </div>
        </div>
      </div>

      {/* Search & Count */}
      <div className="flex items-center gap-4 sticky top-16 bg-[#f3f4f6] z-30 py-2">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
                type="text" 
                placeholder={isTamil ? "திரையரங்கைத் தேடுங்கள்" : "Search theater..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-red-500 outline-none text-sm"
            />
         </div>
      </div>

      <div className="space-y-4">
        {filteredTheaters.length === 0 ? (
            <div className="text-center py-10 text-gray-500 bg-white rounded-xl">
                <p>No theaters found in {isTamil ? selectedCity?.nameTa : selectedCity?.nameEn}</p>
            </div>
        ) : (
            filteredTheaters.map((theater) => (
            <div key={theater.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-3">
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    {isTamil ? theater.nameTa : theater.nameEn}
                    {theater.type === 'Local' && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Local</span>
                    )}
                    </h4>
                    <div className="flex items-center gap-3 mt-1.5">
                        <button 
                            onClick={() => openMap(theater)}
                            className="flex items-center gap-1 text-xs text-blue-600 hover:underline bg-blue-50 px-2 py-1 rounded-full transition-colors"
                        >
                            <Navigation className="w-3 h-3" />
                            {theater.distance} • Map
                        </button>
                        <span className="text-xs text-gray-500 truncate max-w-[150px]">{theater.location}</span>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                {theater.showtimes.map((show) => {
                    const isFillingFast = show.seatsAvailable < 20;
                    return (
                    <button
                        key={show.id}
                        onClick={() => onShowtimeSelect(theater, show)}
                        className={`
                        relative flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-sm transition-all active:scale-95
                        ${isFillingFast 
                            ? 'border-orange-200 bg-orange-50 text-orange-900 hover:bg-orange-100' 
                            : 'border-gray-200 bg-white text-green-700 hover:border-green-500 hover:bg-green-50'
                        }
                        `}
                    >
                        <span className="font-bold text-sm">{show.time}</span>
                        <span className="text-[10px] text-gray-500">₹{show.price}</span>
                        {isFillingFast && (
                        <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-sm" />
                        )}
                    </button>
                    );
                })}
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};
