export enum AppStep {
  LANGUAGE_SELECTION = 'LANGUAGE_SELECTION',
  CITY_SELECTION = 'CITY_SELECTION',
  MOVIE_LIST = 'MOVIE_LIST',
  THEATER_LIST = 'THEATER_LIST',
  SEAT_SELECTION = 'SEAT_SELECTION',
  CONFIRMATION = 'CONFIRMATION',
}

export type Language = 'en' | 'ta';

export interface City {
  id: string;
  nameEn: string;
  nameTa: string;
}

export interface Movie {
  id: string;
  titleEn: string;
  titleTa: string;
  genre: string;
  duration: string;
  rating: string;
  votes: string;
  imageUrl: string;
  language: string;
  status: 'now_showing' | 'upcoming';
  trailerUrl?: string; // YouTube Embed ID
  releaseDate?: string;
}

export interface Theater {
  id: string;
  cityId: string;
  nameEn: string;
  nameTa: string;
  location: string;
  lat?: number;
  lng?: number;
  distance: string; // Mock distance relative to city center
  type: 'Multiplex' | 'Local' | 'Single Screen';
}

export interface ShowTime {
  id: string;
  theaterId: string;
  time: string;
  price: number;
  seatsAvailable: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'booked' | 'selected';
  price: number;
  type: 'Standard' | 'Premium';
}

export interface BookingState {
  language: Language;
  city: City | null;
  movie: Movie | null;
  theater: Theater | null;
  showTime: ShowTime | null;
  selectedSeats: Seat[];
}
