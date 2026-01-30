import React, { useState } from 'react';
import { AppStep, City, Language } from '../types';
import { CITIES } from '../constants';
import { Button } from './Button';
import { Globe, MapPin, Search } from 'lucide-react';

interface Props {
  step: AppStep;
  onLanguageSelect: (lang: Language) => void;
  onCitySelect: (city: City) => void;
}

export const LanguageCitySelector: React.FC<Props> = ({ step, onLanguageSelect, onCitySelect }) => {
  const [search, setSearch] = useState('');

  if (step === AppStep.LANGUAGE_SELECTION) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 space-y-8 animate-fade-in">
        <div className="perspective-1000">
           <div className="text-center space-y-4 transform hover:rotate-y-12 transition-transform duration-500 cursor-pointer">
            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-all">
                <Globe className="w-10 h-10 text-red-600 drop-shadow-md" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Select Language</h2>
            <p className="text-gray-500 text-lg">மொழியைத் தேர்ந்தெடுக்கவும்</p>
           </div>
        </div>
        
        <div className="w-full max-w-sm space-y-4 pt-8">
          <Button 
            fullWidth 
            onClick={() => onLanguageSelect('ta')}
            className="text-lg py-4 border-2 border-transparent hover:border-red-100 shadow-[0_4px_0_rgb(185,28,28)] active:shadow-none active:translate-y-1 transition-all"
          >
            தமிழ் (Tamil)
          </Button>
          <Button 
            fullWidth 
            variant="outline"
            onClick={() => onLanguageSelect('en')}
            className="text-lg py-4 shadow-[0_4px_0_rgb(229,231,235)] active:shadow-none active:translate-y-1 transition-all"
          >
            English
          </Button>
        </div>
      </div>
    );
  }

  // City Selection
  const filteredCities = CITIES.filter(c => 
    c.nameEn.toLowerCase().includes(search.toLowerCase()) || 
    c.nameTa.includes(search)
  );

  return (
    <div className="flex flex-col min-h-[80vh] pt-6 px-4 animate-fade-in bg-gray-50/50">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Select City</h2>
        <p className="text-gray-500">நகரத்தைத் தேர்ந்தெடுக்கவும்</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text"
          placeholder="Search / தேடுக..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 pb-20">
        {filteredCities.map((city) => (
          <button
            key={city.id}
            onClick={() => onCitySelect(city)}
            className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-50 transition-colors">
              <MapPin className="w-5 h-5 text-blue-600 group-hover:text-red-600" />
            </div>
            <span className="text-lg font-bold text-gray-800 group-hover:text-red-700">{city.nameTa}</span>
            <span className="text-sm text-gray-500 group-hover:text-red-600">{city.nameEn}</span>
            
            {/* 3D bottom edge effect */}
            <div className="absolute inset-0 border-b-4 border-gray-100 rounded-xl group-hover:border-red-100 pointer-events-none"></div>
          </button>
        ))}
        {filteredCities.length === 0 && (
          <div className="col-span-2 text-center py-10 text-gray-400">
            No cities found.
          </div>
        )}
      </div>
    </div>
  );
};
