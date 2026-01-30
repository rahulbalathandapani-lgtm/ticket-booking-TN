import React from 'react';
import { BookingState } from '../types';
import { CheckCircle, Download, Share2 } from 'lucide-react';
import { Button } from './Button';

interface Props {
  booking: BookingState;
  onHome: () => void;
}

export const BookingConfirmation: React.FC<Props> = ({ booking, onHome }) => {
  const isTamil = booking.language === 'ta';
  const { movie, theater, showTime, selectedSeats, city } = booking;
  const totalPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  if (!movie || !theater || !showTime || !city) return null;

  return (
    <div className="p-6 flex flex-col items-center animate-fade-in min-h-[80vh] justify-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        {isTamil ? "டிக்கெட் உறுதி செய்யப்பட்டது!" : "Booking Confirmed!"}
      </h2>
      <p className="text-gray-500 mb-8 text-center">
        {isTamil ? "உங்கள் மின்னஞ்சலுக்கு டிக்கெட் அனுப்பப்பட்டது" : "Your ticket has been sent to your email"}
      </p>

      {/* Ticket Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
        {/* Cutout circles for ticket effect */}
        <div className="absolute top-1/2 -left-3 w-6 h-6 bg-gray-50 rounded-full"></div>
        <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gray-50 rounded-full"></div>
        <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-gray-200"></div>

        {/* Top Half - Movie Info */}
        <div className="p-6 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <h3 className="text-2xl font-bold leading-tight mb-1">
            {isTamil ? movie.titleTa : movie.titleEn}
          </h3>
          <p className="text-red-100 text-sm mb-4">{movie.rating} • {movie.language}</p>
          
          <div className="flex justify-between items-end">
            <div>
               <p className="text-xs text-red-200 uppercase font-semibold">Date</p>
               <p className="font-medium">Today</p>
            </div>
            <div className="text-right">
               <p className="text-xs text-red-200 uppercase font-semibold">Time</p>
               <p className="font-medium text-lg">{showTime.time}</p>
            </div>
          </div>
        </div>

        {/* Bottom Half - Seat & Theater Info */}
        <div className="p-6 bg-white pt-8">
            <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase font-bold">Theater</p>
                <p className="text-gray-900 font-bold text-lg">{isTamil ? theater.nameTa : theater.nameEn}</p>
                <p className="text-gray-500 text-sm">{theater.location}, {isTamil ? city.nameTa : city.nameEn}</p>
            </div>
            
            <div className="flex justify-between mb-6">
                <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Seats</p>
                    <p className="text-gray-900 font-bold text-xl">
                        {selectedSeats.map(s => `${s.row}${s.number}`).join(', ')}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase font-bold">Price</p>
                    <p className="text-gray-900 font-bold text-xl">₹{totalPrice}</p>
                </div>
            </div>

            <div className="flex justify-center mb-2">
                 {/* Mock QR */}
                <div className="bg-gray-900 p-2 rounded">
                   <div className="w-32 h-8 flex items-center justify-center gap-1">
                      <div className="h-full w-1 bg-white"></div>
                      <div className="h-full w-2 bg-white"></div>
                      <div className="h-full w-1 bg-white"></div>
                      <div className="h-full w-4 bg-white"></div>
                      <div className="h-full w-1 bg-white"></div>
                      <div className="h-full w-3 bg-white"></div>
                      <div className="h-full w-1 bg-white"></div>
                   </div>
                   <p className="text-[8px] text-white text-center mt-1 font-mono">TK-{Math.floor(Math.random()*100000)}</p>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-sm flex gap-3">
        <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" /> Share
        </Button>
        <Button onClick={onHome} className="flex-1">
            {isTamil ? "முகப்பு" : "Home"}
        </Button>
      </div>
    </div>
  );
};
