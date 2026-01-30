import { City, Movie, Theater, ShowTime } from './types';

export const CITIES: City[] = [
  { id: 'c1', nameEn: 'Ariyalur', nameTa: 'அரியலூர்' },
  { id: 'c2', nameEn: 'Chengalpattu', nameTa: 'செங்கல்பட்டு' },
  { id: 'c3', nameEn: 'Chennai', nameTa: 'சென்னை' },
  { id: 'c4', nameEn: 'Coimbatore', nameTa: 'கோயம்புத்தூர்' },
  { id: 'c5', nameEn: 'Cuddalore', nameTa: 'கடலூர்' },
  { id: 'c6', nameEn: 'Dharmapuri', nameTa: 'தர்மபுரி' },
  { id: 'c7', nameEn: 'Dindigul', nameTa: 'திண்டுக்கல்' },
  { id: 'c8', nameEn: 'Erode', nameTa: 'ஈரோடு' },
  { id: 'c9', nameEn: 'Kallakurichi', nameTa: 'கள்ளக்குறிச்சி' },
  { id: 'c10', nameEn: 'Kancheepuram', nameTa: 'காஞ்சிபுரம்' },
  { id: 'c11', nameEn: 'Kanyakumari', nameTa: 'கன்னியாகுமரி' },
  { id: 'c12', nameEn: 'Karur', nameTa: 'கரூர்' },
  { id: 'c13', nameEn: 'Krishnagiri', nameTa: 'கிருஷ்ணகிரி' },
  { id: 'c14', nameEn: 'Madurai', nameTa: 'மதுரை' },
  { id: 'c15', nameEn: 'Mayiladuthurai', nameTa: 'மயிலாடுதுறை' },
  { id: 'c16', nameEn: 'Nagapattinam', nameTa: 'நாகப்பட்டினம்' },
  { id: 'c17', nameEn: 'Namakkal', nameTa: 'நாமக்கல்' },
  { id: 'c18', nameEn: 'Nilgiris', nameTa: 'நீலகிரி' },
  { id: 'c19', nameEn: 'Perambalur', nameTa: 'பெரம்பலூர்' },
  { id: 'c20', nameEn: 'Pudukkottai', nameTa: 'புதுக்கோட்டை' },
  { id: 'c21', nameEn: 'Ramanathapuram', nameTa: 'ராமநாதபுரம்' },
  { id: 'c22', nameEn: 'Ranipet', nameTa: 'ராணிப்பேட்டை' },
  { id: 'c23', nameEn: 'Salem', nameTa: 'சேலம்' },
  { id: 'c24', nameEn: 'Sivaganga', nameTa: 'சிவகங்கை' },
  { id: 'c25', nameEn: 'Tenkasi', nameTa: 'தென்காசி' },
  { id: 'c26', nameEn: 'Thanjavur', nameTa: 'தஞ்சாவூர்' },
  { id: 'c27', nameEn: 'Theni', nameTa: 'தேனி' },
  { id: 'c28', nameEn: 'Thoothukudi', nameTa: 'தூத்துக்குடி' },
  { id: 'c29', nameEn: 'Tiruchirappalli', nameTa: 'திருச்சிராப்பள்ளி' },
  { id: 'c30', nameEn: 'Tirunelveli', nameTa: 'திருநெல்வேலி' },
  { id: 'c31', nameEn: 'Tirupathur', nameTa: 'திருப்பத்தூர்' },
  { id: 'c32', nameEn: 'Tiruppur', nameTa: 'திருப்பூர்' },
  { id: 'c33', nameEn: 'Tiruvallur', nameTa: 'திருவள்ளூர்' },
  { id: 'c34', nameEn: 'Tiruvannamalai', nameTa: 'திருவண்ணாமலை' },
  { id: 'c35', nameEn: 'Tiruvarur', nameTa: 'திருவாரூர்' },
  { id: 'c36', nameEn: 'Vellore', nameTa: 'வேலூர்' },
  { id: 'c37', nameEn: 'Viluppuram', nameTa: 'விழுப்புரம்' },
  { id: 'c38', nameEn: 'Virudhunagar', nameTa: 'விருதுநகர்' },
];

export const MOVIES: Movie[] = [
  // Now Showing
  {
    id: 'm1',
    titleEn: 'Amaran',
    titleTa: 'அமரன்',
    genre: 'Action/Biopic',
    duration: '2h 49m',
    rating: '9.3',
    votes: '150K',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Amaran_2024_poster.jpg/220px-Amaran_2024_poster.jpg',
    language: 'Tamil',
    status: 'now_showing',
    trailerUrl: 'hylH4QvF0w0', 
  },
  {
    id: 'm2',
    titleEn: 'Kanguva',
    titleTa: 'கங்குவா',
    genre: 'Fantasy/Action',
    duration: '2h 34m',
    rating: '8.4',
    votes: '110K',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Kanguva_poster.jpg/220px-Kanguva_poster.jpg',
    language: 'Tamil',
    status: 'now_showing',
    trailerUrl: 'Qf6Lg95_tF0',
  },
  {
    id: 'm3',
    titleEn: 'Bloody Beggar',
    titleTa: 'பிளடி பெக்கர்',
    genre: 'Black Comedy',
    duration: '2h 15m',
    rating: '8.1',
    votes: '45K',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Bloody_Beggar.jpg/220px-Bloody_Beggar.jpg',
    language: 'Tamil',
    status: 'now_showing',
    trailerUrl: 'hylH4QvF0w0', // Reusing ID for demo as official link might vary
  },
  {
    id: 'm4',
    titleEn: 'Brother',
    titleTa: 'பிரதர்',
    genre: 'Comedy/Drama',
    duration: '2h 28m',
    rating: '7.5',
    votes: '30K',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Brother_2024_film_poster.jpg/220px-Brother_2024_film_poster.jpg',
    language: 'Tamil',
    status: 'now_showing',
    trailerUrl: 'hylH4QvF0w0', // Reusing ID for demo
  },
  {
    id: 'm5',
    titleEn: 'Lubber Pandhu',
    titleTa: 'லப்பர் பந்து',
    genre: 'Sports/Drama',
    duration: '2h 25m',
    rating: '9.0',
    votes: '85K',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Lubber_Pandhu.jpg/220px-Lubber_Pandhu.jpg',
    language: 'Tamil',
    status: 'now_showing',
    trailerUrl: 'hylH4QvF0w0', // Reusing ID for demo
  },
  {
    id: 'm6',
    titleEn: 'Vettaiyan',
    titleTa: 'வேட்டையன்',
    genre: 'Action/Drama',
    duration: '2h 40m',
    rating: '8.6',
    votes: '120K',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Vettaiyan_poster.jpg/220px-Vettaiyan_poster.jpg',
    language: 'Tamil',
    status: 'now_showing',
    trailerUrl: 'ckuOw3Tj2aY',
  },
   // Upcoming
  {
    id: 'm7',
    titleEn: 'Viduthalai Part 2',
    titleTa: 'விடுதலை 2',
    genre: 'Crime/Drama',
    duration: 'TBA',
    rating: 'Wait',
    votes: '60K Interests',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Viduthalai_Part_2.jpg',
    language: 'Tamil',
    status: 'upcoming',
    trailerUrl: 'T4q7W4x_sHw',
    releaseDate: 'Dec 2024'
  },
  {
    id: 'm8',
    titleEn: 'Thug Life',
    titleTa: 'தக் லைஃப்',
    genre: 'Action/Gangster',
    duration: 'TBA',
    rating: 'Wait',
    votes: '100K Interests',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Thug_Life_2025.jpg/220px-Thug_Life_2025.jpg',
    language: 'Tamil',
    status: 'upcoming',
    trailerUrl: 'hylH4QvF0w0',
    releaseDate: '2025'
  },
  {
    id: 'm9',
    titleEn: 'Vidaamuyarchi',
    titleTa: 'விடாமுயற்சி',
    genre: 'Action/Thriller',
    duration: 'TBA',
    rating: 'Wait',
    votes: '150K Interests',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Vidaamuyarchi.jpg/220px-Vidaamuyarchi.jpg',
    language: 'Tamil',
    status: 'upcoming',
    trailerUrl: 'hylH4QvF0w0',
    releaseDate: '2025'
  },
  {
    id: 'm10',
    titleEn: 'Coolie',
    titleTa: 'கூலி',
    genre: 'Action',
    duration: 'TBA',
    rating: 'Wait',
    votes: '200K Interests',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Coolie_2025_poster.jpg/220px-Coolie_2025_poster.jpg',
    language: 'Tamil',
    status: 'upcoming',
    trailerUrl: 'hylH4QvF0w0',
    releaseDate: '2025'
  }
];

// Helper to assign proper naming
const toTamilName = (name: string): string => {
  return name
    .replace('Cinemas', 'சினிமாஸ்')
    .replace('Theatre', 'தியேட்டர்')
    .replace('Complex', 'காம்ப்ளக்ஸ்')
    .replace('Multiplex', 'மல்டிபிளக்ஸ்')
    .replace('Silver Screens', 'சில்வர் ஸ்கிரீன்ஸ்')
    .replace('Theatres', 'தியேட்டர்ஸ்');
};

// Comprehensive list of theaters for all 38 districts
const DISTRICT_THEATER_NAMES: Record<string, string[]> = {
  // c1 Ariyalur
  c1: ['JK Cinemas', 'Sri Shanmuga Theatre', 'Krishna Theatre', 'Lakshmi Cinemas', 'Balaji Theatre'],
  // c2 Chengalpattu
  c2: ['Lathaa Cinemas', 'SRK Cinemas', 'PVR Grand Galada', 'Vishaal Cinemas', 'Caps Cinemas'],
  // c3 Chennai
  c3: ['Sathyam Cinemas', 'PVR Cinemas', 'Rohini Silver Screens', 'Vettri Theatres', 'AGS Cinemas', 'Devi Cineplex', 'Sangam Cinemas', 'Kamala Cinemas', 'Udhayam Theatres', 'Palazzo Cinemas'],
  // c4 Coimbatore
  c4: ['KG Cinemas', 'Shanthi Theatre', 'PVR Cinemas', 'INOX Prozone', 'Karpagam Complex', 'Archana & Darsana', 'Senthil Kumaran Theatres'],
  // c5 Cuddalore
  c5: ['New Cinema', 'Krishnalaya Theatre', 'Velmurugan Theatre', 'Anand Cinemas', 'PVR Cuddalore'],
  // c6 Dharmapuri
  c6: ['DNC Theatres', 'Madeshwara Cinemas', 'Variyar Theatre', 'Time Cinemas', 'Ganesh Theatre'],
  // c7 Dindigul
  c7: ['Solai Hall', 'Rajendra Theatre', 'PVR Dindigul', 'Omega Cinemas', 'Natraj Theatre'],
  // c8 Erode
  c8: ['Maharaja Multiplex', 'PVR Cinemas', 'Agastya Theatre', 'Abirami Cinemas', 'Sakthi Cinemas'],
  // c9 Kallakurichi
  c9: ['Thangam Theatre', 'SMK Cinemas', 'Lakshmi Theatre', 'Sri Krishna Cinemas', 'Gomathi Theatre'],
  // c10 Kancheepuram
  c10: ['Babu Theatre', 'Aruna Complex', 'Balaji Theatre', 'Sri Subramaniya', 'MM Theatres'],
  // c11 Kanyakumari
  c11: ['Chakravarthy Cinemas', 'Pioneer Paradise', 'Muthu Cinemas', 'Karthigeys Theatre', 'PVR Nagercoil'],
  // c12 Karur
  c12: ['Ajantha Cinemas', 'Amutha Theatre', 'Kavithalaya', 'Ellora Theatre', 'PVR Karur'],
  // c13 Krishnagiri
  c13: ['PVR Krishnagiri', 'Murugan Theatre', 'Santhosh Cinemas', 'Devi Theatre', 'Sri Krishna'],
  // c14 Madurai
  c14: ['Gopuram Cinemas', 'Vetri Cinemas', 'INOX Vishaal', 'Thangam Theatre', 'Ambiga Cinemas', 'Priya Complex', 'Solaimalai Cinemas'],
  // c15 Mayiladuthurai
  c15: ['Gomathi Theatre', 'Ratna Cinemas', 'Vijaya Theatre', 'Kaveri Theatre', 'Kamadhenu Theatre'],
  // c16 Nagapattinam
  c16: ['Vijaya Theatre', 'Kadal Cinemas', 'Lakshmi Theatre', 'Sri Ram Cinemas', 'Murugan Theatre'],
  // c17 Namakkal
  c17: ['K S Theatre', 'Latha Cinemas', 'Sri Krishna', 'Abirami Theatre', 'Saravana Cinemas'],
  // c18 Nilgiris
  c18: ['Assembly Rooms', 'Liberty Theatre', 'Alankar Theatre', 'Sri Krishna', 'Srinivasa Theatre'],
  // c19 Perambalur
  c19: ['Palani Theatre', 'Arul Cinemas', 'Thangam Theatre', 'Lakshmi Cinemas', 'Sri Venkateswara'],
  // c20 Pudukkottai
  c20: ['Maapillai Theatre', 'Santhi Theatre', 'Raj Theatre', 'Brahadambal', 'PVR Pudukkottai'],
  // c21 Ramanathapuram
  c21: ['Jagan Cinemas', 'Sri Ram Theatre', 'Muthu Cinemas', 'Raj Theatre', 'Velan Cinemas'],
  // c22 Ranipet
  c22: ['MSR Cinemas', 'Lakshmi Theatre', 'Thirumalai Theatre', 'Sri Krishna', 'Raja Theatre'],
  // c23 Salem
  c23: ['ARRS Multiplex', 'Kailash Theatre', 'KS Theatre', 'INOX Salem', 'PVR Salem', 'Sapna Theatre'],
  // c24 Sivaganga
  c24: ['Muthu Theatre', 'Thai Cinemas', 'Sri Krishna', 'Raja Theatre', 'Lakshmi Cinemas'],
  // c25 Tenkasi
  c25: ['Pauli Theatre', 'Anand Cinemas', 'Sri Ram', 'Krishna Theatre', 'Vetri Cinemas'],
  // c26 Thanjavur
  c26: ['Jupiter Theatre', 'GV Complex', 'Yagappa Theatre', 'Tamil Nadu Theatre', 'PVR Thanjavur'],
  // c27 Theni
  c27: ['Latha Cinemas', 'Vetri Theatre', 'Sri Krishna', 'Murugan Theatre', 'Anand Cinemas'],
  // c28 Thoothukudi
  c28: ['Balakrishna Talkies', 'KSPS Complex', 'SJ Cinemas', 'PVR Thoothukudi', 'Charles Theatre'],
  // c29 Tiruchirappalli
  c29: ['LA Cinema', 'Maris Theatre', 'Sona Mina', 'Rambha Theatre', 'Cauvery Theatre', 'PVR Trichy'],
  // c30 Tirunelveli
  c30: ['Ram Muthuram Cinemas', 'PVR Tirunelveli', 'Perinba Vilas', 'Bombay Theatre', 'Ratna Theatre'],
  // c31 Tirupathur
  c31: ['PVR Tirupathur', 'Krishna Theatre', 'Lakshmi Cinemas', 'Sri Ram', 'Anand Theatre'],
  // c32 Tiruppur
  c32: ['Sivan Theatre', 'Sri Shakti Cinemas', 'PVR Tiruppur', 'Universal Theatre', 'Lakshmi Cinemas'],
  // c33 Tiruvallur
  c33: ['Rakki Cinemas', 'Meera Theatre', 'Sri Krishna', 'Lakshmi Theatre', 'Raja Cinemas'],
  // c34 Tiruvannamalai
  c34: ['Balasubramaniar', 'Sakthi Theatre', 'Sri Krishna', 'Anand Cinemas', 'PVR Tiruvannamalai'],
  // c35 Tiruvarur
  c35: ['Thayagaraja', 'Sri Krishna', 'Lakshmi Theatre', 'Anand Cinemas', 'Murugan Theatre'],
  // c36 Vellore
  c36: ['Venus Theatre', 'Vishnu Cinemas', 'Lakshmi Theatre', 'PVR Vellore', 'Apsara Theatre'],
  // c37 Viluppuram
  c37: ['Murugan Theatre', 'Anand Cinemas', 'Sri Krishna', 'Lakshmi Theatre', 'PVR Viluppuram'],
  // c38 Virudhunagar
  c38: ['Radha Theatre', 'PVR Virudhunagar', 'Lakshmi Cinemas', 'Sri Krishna', 'Anand Cinemas'],
};

export const THEATERS: Theater[] = Object.entries(DISTRICT_THEATER_NAMES).flatMap(([cityId, names]) => {
  const city = CITIES.find(c => c.id === cityId);
  return names.map((name, index) => ({
    id: `${cityId}_t${index + 1}`,
    cityId,
    nameEn: name,
    nameTa: toTamilName(name),
    location: `${name} Rd, ${city?.nameEn || 'City Center'}`,
    distance: `${(Math.random() * 8 + 0.5).toFixed(1)} km`,
    type: name.includes('PVR') || name.includes('INOX') || name.includes('Multiplex') ? 'Multiplex' : 'Local',
  }));
});

export const generateShowtimes = (theaterId: string): ShowTime[] => {
  const baseTimes = ['10:30 AM', '02:00 PM', '06:15 PM', '10:00 PM'];
  return baseTimes.map((time, index) => ({
    id: `${theaterId}_st_${index}`,
    theaterId,
    time,
    price: 150 + Math.floor(Math.random() * 50),
    seatsAvailable: Math.floor(Math.random() * 100) + 10,
  }));
};
