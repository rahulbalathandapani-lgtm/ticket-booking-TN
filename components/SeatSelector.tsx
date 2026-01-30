import React, { useState, useEffect } from 'react';
import { Language, Theater, ShowTime, Seat } from '../types';
import { Button } from './Button';

interface Props {
  language: Language;
  theater: Theater;
  showtime: ShowTime;
  onConfirmSeats: (seats: Seat[]) => void;
}

export const SeatSelector: React.FC<Props> = ({ language, theater, showtime, onConfirmSeats }) => {
  const isTamil = language === 'ta';
  const [seats, setSeats] = useState<Seat[]>([]);
  
  // Generate mock seat layout on mount
  useEffect(() => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const cols = 8;
    const generatedSeats: Seat[] = [];
    
    rows.forEach((row, rIndex) => {
      const price = rIndex < 2 ? showtime.price + 50 : showtime.price; // Premium rows
      const type = rIndex < 2 ? 'Premium' : 'Standard';

      for (let i = 1; i <= cols; i++) {
        // Randomly mark some as booked
        const isBooked = Math.random() < 0.3;
        generatedSeats.push({
          id: `${row}${i}`,
          row,
          number: i,
          status: isBooked ? 'booked' : 'available',
          price,
          type
        });
      }
    });
    setSeats(generatedSeats);
  }, [showtime]);

  const toggleSeat = (seatId: string) => {
    setSeats(prev => prev.map(seat => {
      if (seat.id === seatId) {
        if (seat.status === 'booked') return seat;
        return {
          ...seat,
          status: seat.status === 'selected' ? 'available' : 'selected'
        };
      }
      return seat;
    }));
  };

  const selectedSeats = seats.filter(s => s.status === 'selected');
  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  // Group seats by row for rendering
  const rows = Array.from(new Set(seats.map(s => s.row)));

  return (
    <div className="flex flex-col h-full bg-gray-900 min-h-[calc(100vh-64px)]">
      {/* Screen Indicator */}
      <div className="pt-8 pb-4 px-8 text-center">
        <div className="w-full h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mb-2 shadow-[0_4px_20px_rgba(255,255,255,0.2)]"></div>
        <p className="text-gray-400 text-xs tracking-widest uppercase">
          {isTamil ? "திரை" : "Screen This Way"}
        </p>
      </div>

      {/* Seat Map */}
      <div className="flex-1 overflow-auto p-4 no-scrollbar">
        <div className="flex flex-col gap-3 items-center min-w-max mx-auto">
          {rows.map(row => (
            <div key={row} className="flex gap-2 items-center">
              <span className="w-6 text-gray-500 text-xs font-medium text-right mr-2">{row}</span>
              <div className="flex gap-2">
                {seats.filter(s => s.row === row).map(seat => (
                  <button
                    key={seat.id}
                    disabled={seat.status === 'booked'}
                    onClick={() => toggleSeat(seat.id)}
                    className={`
                      w-8 h-8 rounded-t-lg rounded-b-sm text-[10px] font-bold transition-all duration-200
                      ${seat.status === 'booked' ? 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50' : ''}
                      ${seat.status === 'available' ? 'bg-white text-gray-900 hover:bg-gray-200 active:scale-95' : ''}
                      ${seat.status === 'selected' ? 'bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)] transform scale-110' : ''}
                    `}
                  >
                    {seat.number}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 py-4 border-t border-gray-800 bg-gray-900">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-white" />
          <span className="text-xs text-gray-400">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500" />
          <span className="text-xs text-gray-400">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-700 opacity-50" />
          <span className="text-xs text-gray-400">Sold</span>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-4 bg-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">
                {isTamil ? "மொத்தம்" : "Total Price"}
              </p>
              <p className="text-2xl font-bold text-gray-900">₹{totalPrice}</p>
            </div>
            <div className="text-right">
               <p className="text-xs text-gray-500">
                 {selectedSeats.length} {isTamil ? "டிக்கெட்டுகள்" : "Tickets"}
               </p>
               <p className="text-sm font-medium text-gray-900 truncate max-w-[150px]">
                 {selectedSeats.map(s => `${s.row}${s.number}`).join(', ')}
               </p>
            </div>
        </div>
        <Button 
          fullWidth 
          disabled={selectedSeats.length === 0}
          onClick={() => onConfirmSeats(selectedSeats)}
        >
          {isTamil ? "டிக்கெட் பதிவு செய்யவும்" : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};
