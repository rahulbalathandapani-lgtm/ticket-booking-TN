import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { AppStep, BookingState } from '../types';

interface HeaderProps {
  currentStep: AppStep;
  bookingState: BookingState;
  onBack: () => void;
  onChangeLocation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentStep, bookingState, onBack, onChangeLocation }) => {
  const showBack = currentStep !== AppStep.LANGUAGE_SELECTION && currentStep !== AppStep.CITY_SELECTION && currentStep !== AppStep.MOVIE_LIST;
  const showLocation = currentStep !== AppStep.LANGUAGE_SELECTION && currentStep !== AppStep.CITY_SELECTION;

  const isTamil = bookingState.language === 'ta';

  let title = "TicketKiosk";
  if (currentStep === AppStep.THEATER_LIST) title = isTamil ? "திரையரங்குகள்" : "Select Theater";
  if (currentStep === AppStep.SEAT_SELECTION) title = isTamil ? "இருக்கை தேர்வு" : "Select Seats";
  if (currentStep === AppStep.CONFIRMATION) title = isTamil ? "டிக்கெட் விவரம்" : "Booking Confirmed";
  if (currentStep === AppStep.MOVIE_LIST) title = isTamil ? "திரைப்படங்கள்" : "Movies";

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}
        <h1 className="text-lg font-bold text-gray-900 truncate max-w-[150px] sm:max-w-none">
          {title}
        </h1>
      </div>

      {showLocation && bookingState.city && (
        <button 
          onClick={onChangeLocation}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <MapPin className="w-4 h-4 text-red-600" />
          <span>{isTamil ? bookingState.city.nameTa : bookingState.city.nameEn}</span>
        </button>
      )}
    </div>
  );
};
