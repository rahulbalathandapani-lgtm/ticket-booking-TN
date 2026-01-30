import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL3hB7Ayi_C2Za9-P80ruU2e47UIZwNiU",
    authDomain: "ticket-booking-tn.firebaseapp.com",
    projectId: "ticket-booking-tn",
    storageBucket: "ticket-booking-tn.firebasestorage.app",
    messagingSenderId: "126903495418",
    appId: "1:126903495418:web:ef805138986a5cc8097743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
