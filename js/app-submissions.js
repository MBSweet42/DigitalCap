// DigitalCap App Submissions
// Firebase Firestore integration for "Suggest an App" feature
// Modular Firebase SDK v12.17.1

import {
  collection,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

/**
 * Submit an app suggestion to Firestore
 * Public users can only CREATE new submissions
 * Firestore rules enforce: status = "pending", createdAt = server timestamp
 *
 * @param {Object} formData - User-submitted suggestion data
 * @param {string} formData.appName - Required, 1-100 chars
 * @param {string} formData.whyWeShould - Required, 1-500 chars
 * @param {string} [formData.appUrl] - Optional, max 500 chars
 * @param {string} [formData.additionalNotes] - Optional, max 1000 chars
 * @returns {Promise} Resolves when submission is accepted by Firestore
 */
export async function submitAppSuggestionToFirestore(formData) {
  // Verify Firebase is initialized
  if (!window.digitalCapFirebase || !window.digitalCapFirebase.db) {
    throw new Error('Firebase not initialized. Please refresh the page.');
  }

  const db = window.digitalCapFirebase.db;

  // Build submission document
  // Firestore rules will validate these fields and force status="pending", createdAt=server time
  const submission = {
    appName: formData.appName,
    whyWeShould: formData.whyWeShould,
    status: 'pending', // Forced by rules, but client explicitly sets it
    createdAt: serverTimestamp(), // Server replaces this with actual timestamp
  };

  // Add optional fields only if provided
  if (formData.appUrl) {
    submission.appUrl = formData.appUrl;
  }
  if (formData.additionalNotes) {
    submission.additionalNotes = formData.additionalNotes;
  }

  try {
    // Add to appSubmissions collection
    const docRef = await addDoc(
      collection(db, 'appSubmissions'),
      submission
    );

    console.log('✅ App suggestion submitted:', docRef.id);
    return { success: true, id: docRef.id };

  } catch (error) {
    console.error('❌ Failed to submit app suggestion:', error);

    // Translate Firebase errors to user-friendly messages
    if (error.code === 'permission-denied') {
      throw new Error('Permission denied. Your submission did not meet security requirements. Please try again.');
    } else if (error.code === 'invalid-argument') {
      throw new Error('Invalid data. Please check your submission and try again.');
    } else if (error.code === 'unavailable') {
      throw new Error('Service temporarily unavailable. Please try again in a moment.');
    } else {
      throw new Error('Failed to submit. Please check your connection and try again.');
    }
  }
}
