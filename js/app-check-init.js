// DigitalCap App Check Integration
// Firebase App Check with reCAPTCHA Enterprise
// Prevents abuse of public submission endpoints

import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js';

/**
 * Initialize Firebase App Check
 *
 * LOCALHOST (127.0.0.1):
 * - Enables debug mode
 * - Generates debug token in browser console
 * - Debug token must be registered in Firebase Console
 *
 * PRODUCTION (GitHub Pages):
 * - Uses real reCAPTCHA Enterprise
 * - No debug mode
 * - Automatic validation via Google
 *
 * @throws {Error} If Firebase is not initialized
 */
export function initializeAppCheckForSubmissions() {
  if (!window.digitalCapFirebase || !window.digitalCapFirebase.app) {
    console.error('Firebase not initialized before App Check');
    return;
  }

  // IMPORTANT: Set debug mode ONLY on localhost
  // This must happen BEFORE initializeAppCheck()
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    console.log('%c🔧 App Check DEBUG MODE ENABLED', 'color: orange; font-weight: bold;');
    console.log('%c📋 Check browser console for debug token. Copy it and register in Firebase Console.', 'color: orange;');
  }

  try {
    const app = window.digitalCapFirebase.app;

    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(
        '6Lr_G5ktAAAAAKBK7oKMk0AxBFIUC6pNnjD8JJ9A'
      ),
      isTokenAutoRefreshEnabled: true
    });

    const mode = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
      ? 'debug'
      : 'production';

    console.log(`✅ App Check initialized (${mode} mode)`);

  } catch (error) {
    console.error('❌ App Check initialization failed:', error);
    // Don't throw - allow app to continue without App Check enforcement (Phase 6D)
    // Enforcement happens in Phase 6E after successful testing
  }
}

/**
 * MANUAL SETUP REQUIRED BEFORE TESTING:
 *
 * 1. Create reCAPTCHA Enterprise key:
 *    - Go to: https://cloud.google.com/recaptcha-enterprise/docs/quickstart
 *    - Create a Web site key for reCAPTCHA Enterprise
 *    - Copy the Site Key
 *
 * 2. Update this file:
 *    - Replace 'RECAPTCHA_ENTERPRISE_SITE_KEY_PLACEHOLDER'
 *    - With your actual reCAPTCHA Enterprise Site Key
 *
 * 3. Configure Firebase Console:
 *    - Firebase Console → App Check
 *    - Select app
 *    - Enable reCAPTCHA Enterprise provider
 *    - Enter the Site Key
 *
 * 4. For LOCAL TESTING (localhost only):
 *    - Run: python -m http.server 8000
 *    - Open: http://127.0.0.1:8000/apps-v2.html
 *    - Check browser console for debug token
 *    - Firebase Console → App Check → Manage debug tokens
 *    - Register the debug token for localhost
 *    - Refresh the page and test submission
 *
 * 5. PRODUCTION (GitHub Pages):
 *    - The reCAPTCHA Enterprise provider will handle validation
 *    - No manual debug token needed
 */
