// DigitalCap Firebase Configuration
// Uses Firebase Modular Web SDK with browser ES-modules
// Safe to commit — contains only public configuration
//
// Admin pages only. Loaded via importmap + module script tag.
// Verify Firebase version against current Firebase documentation.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

// Public Firebase Web Configuration
// Obtained from Firebase Console → Project Settings → Web App
// Update these values after creating Firebase project
const firebaseConfig = {
    apiKey: "AIzaSyD7S0W1LwefHdsLVQpmEbzW5hETlipGF0k",
    authDomain: "digitalcap-bd096.firebaseapp.com",
    projectId: "digitalcap-bd096",
    storageBucket: "digitalcap-bd096.firebasestorage.app",
    messagingSenderId: "942270234967",
    appId: "1:942270234967:web:db8e065eb1a4393bf57e12"
};

// Verify config is populated
if (firebaseConfig.projectId === "YOUR_PROJECT_ID") {
    console.warn('⚠️ Firebase config not populated. Update js/firebase-config.js with values from Firebase Console.');
    throw new Error('Firebase config incomplete');
}

try {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize services
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Export to global scope for admin pages only
    window.digitalCapFirebase = {
        app,
        auth,
        db
    };

    console.log('✅ Firebase initialized (modular SDK)');
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
    throw error;
}
