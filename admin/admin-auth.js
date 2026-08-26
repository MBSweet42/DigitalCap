// DigitalCap Admin Authentication
// Firebase Modular SDK - Email/Password Authentication
// Authorized admin UID check

// IMPORTANT: Update this with your admin UID from Firebase Authentication
// Found in: Firebase Console → Authentication → Users → Click admin user → View UID
const AUTHORIZED_ADMIN_UID = "3fdKe1IKJtP7DhQD0OZ2919STYH2";

// Firebase services imported from global window object
// (initialized in js/firebase-config.js)
const { auth, db } = window.digitalCapFirebase;

// Import Firebase Auth functions
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js';

// Import moderation module
import { initializeModeration, stopModeration } from './admin-moderation.js';

// DOM Elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const emailInput = document.getElementById('admin-email');
const passwordInput = document.getElementById('admin-password');
const signInButton = document.getElementById('sign-in-btn');
const errorMessage = document.getElementById('error-message');
const adminUserDisplay = document.getElementById('admin-user');
const signOutButton = document.getElementById('sign-out-btn');

// Initialize auth state listener on page load
function initializeAuthListener() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      if (user.uid === AUTHORIZED_ADMIN_UID) {
        // Authorized admin
        showDashboard(user);
      } else {
        // Signed in but NOT authorized
        signOut(auth).then(() => {
          showLogin();
          showError('This account is not authorized for DigitalCap admin access.');
        }).catch((error) => {
          showError('Error during authorization check. Please sign out and try again.');
          console.error('Logout error:', error);
        });
      }
    } else {
      // User is signed out
      showLogin();
      clearError();
    }
  });
}

function showLogin() {
  loginSection.style.display = 'block';
  dashboardSection.style.display = 'none';
  emailInput.disabled = false;
  passwordInput.disabled = false;
  signInButton.disabled = false;

  // Stop moderation UI on logout
  stopModeration();
}

function showDashboard(user) {
  loginSection.style.display = 'none';
  dashboardSection.style.display = 'block';
  adminUserDisplay.textContent = user.email;

  // Initialize moderation UI after authorization is confirmed
  initializeModeration(user);
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
}

// Handle Sign In
signInButton.addEventListener('click', async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showError('Please enter both email and password.');
    return;
  }

  // Disable button and show loading state
  signInButton.disabled = true;
  signInButton.textContent = 'Signing in...';
  clearError();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Auth state listener will handle showing dashboard or error
  } catch (error) {
    signInButton.disabled = false;
    signInButton.textContent = 'Sign In';

    // Translate Firebase errors to user-friendly messages
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        showError('Invalid email or password.');
        break;
      case 'auth/too-many-requests':
        showError('Too many failed login attempts. Please try again later.');
        break;
      case 'auth/network-request-failed':
        showError('Network error. Please check your connection and try again.');
        break;
      default:
        showError('Sign in failed. Please try again.');
        console.error('Sign in error:', error.message);
    }

    // Clear password field for security
    passwordInput.value = '';
  }
});

// Handle Sign Out
signOutButton.addEventListener('click', async () => {
  signOutButton.disabled = true;
  try {
    await signOut(auth);
    showLogin();
    clearError();
    emailInput.value = '';
    passwordInput.value = '';
  } catch (error) {
    console.error('Sign out error:', error);
    showError('Error signing out. Please refresh the page.');
  } finally {
    signOutButton.disabled = false;
  }
});

// Allow Enter key to sign in
passwordInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    signInButton.click();
  }
});

// Initialize immediately (module loaded after DOMContentLoaded)
initializeAuthListener();
