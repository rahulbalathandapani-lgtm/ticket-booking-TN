import React, { useState } from 'react';
import { AppStep, BookingState, City, Language, Movie, Seat, ShowTime, Theater } from '../types';
import { Header } from './Header';
import { LanguageCitySelector } from './LanguageCitySelector';
import { MovieList } from './MovieList';
import { TheaterList } from './TheaterList';
import { SeatSelector } from './SeatSelector';
import { BookingConfirmation } from './BookingConfirmation';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export const BookingFlow: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.LANGUAGE_SELECTION);
    const [bookingState, setBookingState] = useState<BookingState>({
        language: 'en',
        city: null,
        movie: null,
        theater: null,
        showTime: null,
        selectedSeats: [],
    });

    const updateBooking = (updates: Partial<BookingState>) => {
        setBookingState(prev => ({ ...prev, ...updates }));
    };

    const handleBack = () => {
        switch (currentStep) {
            case AppStep.MOVIE_LIST:
                setCurrentStep(AppStep.CITY_SELECTION);
                break;
            case AppStep.THEATER_LIST:
                setCurrentStep(AppStep.MOVIE_LIST);
                break;
            case AppStep.SEAT_SELECTION:
                setCurrentStep(AppStep.THEATER_LIST);
                break;
            case AppStep.CONFIRMATION:
                setCurrentStep(AppStep.MOVIE_LIST); // Go back to movies after booking
                setBookingState(prev => ({
                    ...prev,
                    movie: null, theater: null, showTime: null, selectedSeats: []
                }));
                break;
            default:
                break;
        }
    };

    const handleChangeLocation = () => {
        // Reset flow to city selection but keep language
        setCurrentStep(AppStep.CITY_SELECTION);
        setBookingState(prev => ({
            ...prev,
            city: null,
            movie: null,
            theater: null,
            showTime: null,
            selectedSeats: []
        }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case AppStep.LANGUAGE_SELECTION:
                return (
                    <LanguageCitySelector
                        step={AppStep.LANGUAGE_SELECTION}
                        onLanguageSelect={(lang) => {
                            updateBooking({ language: lang });
                            setCurrentStep(AppStep.CITY_SELECTION);
                        }}
                        onCitySelect={() => { }}
                    />
                );
            case AppStep.CITY_SELECTION:
                return (
                    <LanguageCitySelector
                        step={AppStep.CITY_SELECTION}
                        onLanguageSelect={() => { }}
                        onCitySelect={(city) => {
                            updateBooking({ city });
                            setCurrentStep(AppStep.MOVIE_LIST);
                        }}
                    />
                );
            case AppStep.MOVIE_LIST:
                return (
                    <MovieList
                        language={bookingState.language}
                        onMovieSelect={(movie) => {
                            updateBooking({ movie });
                            setCurrentStep(AppStep.THEATER_LIST);
                        }}
                    />
                );
            case AppStep.THEATER_LIST:
                if (!bookingState.movie) return null;
                return (
                    <TheaterList
                        language={bookingState.language}
                        selectedMovie={bookingState.movie}
                        selectedCity={bookingState.city}
                        onShowtimeSelect={(theater, showTime) => {
                            updateBooking({ theater, showTime });
                            setCurrentStep(AppStep.SEAT_SELECTION);
                        }}
                    />
                );
            case AppStep.SEAT_SELECTION:
                if (!bookingState.theater || !bookingState.showTime) return null;
                return (
                    <SeatSelector
                        language={bookingState.language}
                        theater={bookingState.theater}
                        showtime={bookingState.showTime}
                        onConfirmSeats={async (seats) => {
                            updateBooking({ selectedSeats: seats });

                            try {
                                await addDoc(collection(db, "bookings"), {
                                    ...bookingState,
                                    selectedSeats: seats,
                                    timestamp: new Date().toISOString(),
                                    // Add user ID if authenticated, handled by auth context usually
                                });
                            } catch (e) {
                                console.error("Error saving booking to Firebase:", e);
                            }

                            setCurrentStep(AppStep.CONFIRMATION);
                        }}
                    />
                );
            case AppStep.CONFIRMATION:
                return (
                    <BookingConfirmation
                        booking={bookingState}
                        onHome={() => {
                            setCurrentStep(AppStep.MOVIE_LIST);
                            setBookingState(prev => ({
                                ...prev,
                                movie: null, theater: null, showTime: null, selectedSeats: []
                            }));
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen max-w-md mx-auto bg-gray-50 shadow-2xl overflow-hidden relative border-x border-gray-200">
            <Header
                currentStep={currentStep}
                bookingState={bookingState}
                onBack={handleBack}
                onChangeLocation={handleChangeLocation}
            />
            <main className="flex-1 relative">
                {renderStep()}
            </main>
        </div>
    );
};
