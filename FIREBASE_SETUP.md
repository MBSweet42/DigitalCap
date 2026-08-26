# DigitalCap Firebase Setup — Phase 6B Foundation

## Overview

This document guides you through setting up Firebase for DigitalCap.

Phase 6B creates the backend foundation. You will perform manual steps in Firebase Console.

---

## Prerequisites

- Google account
- Firebase Console access (free)
- ~15 minutes

---

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Name: `digitalcap`
4. Accept terms → Create
5. Wait for project to initialize (~2-3 minutes)

**Outcome:** Firebase project exists

---

## Step 2: Register Web App

1. Firebase Console → Project Overview
2. Click "Add app" → `</>` (web)
3. App name: `digitalcap-web`
4. Click "Register app"
5. Continue to next step

**Outcome:** Web app registered

---

## Step 3: Create Firestore Database

1. Firebase Console → Firestore Database (left sidebar)
2. Click "Create database"
3. **Select: "Production mode"** (NOT test mode)
4. Choose region nearest to you
5. Click "Enable"
6. Wait for database initialization (~1-2 minutes)

Database is now created but completely locked (deny all access).

**Outcome:** Firestore database exists, locked by default-deny

---

## Step 4: Deploy Security Rules

1. Firestore → Rules tab
2. Delete default rules
3. Copy and paste the complete contents of `/firestore.rules`
4. Click "Publish"
5. Confirm publish

Database is now protected by Phase 6B default-deny rules.

**Outcome:** Security rules deployed

---

## Step 5: Set Up Authentication

1. Firebase Console → Authentication (left sidebar)
2. Click "Get started"
3. Select provider: "Email/Password"
4. Enable it
5. Go to "Users" tab
6. Click "Add user"
   - Email: `cjwilken@gmail.com`
   - Password: (choose secure password, save separately, NOT in code)
7. Click "Add user"

**Outcome:** Email/Password provider enabled

---

## Step 6: Get Admin UID

1. Go back to Authentication → Users tab
2. Click the user row to view details
3. Look for "User UID" field
4. **COPY this UID** (looks like: `abc123def456xyz789`)
5. **SAVE this UID** — needed for Phase 6C

**Important:** Do NOT commit this UID to code yet. It will be added to firestore.rules during Phase 6C.

**Outcome:** Admin UID obtained and saved

---

## Step 7: Get Firebase Web Configuration

1. Firebase Console → Project Settings (⚙️ icon, top right)
2. "General" tab
3. Scroll to "Your apps" section
4. Find "digitalcap-web" app
5. Click the `</>` icon to view config
6. You should see a code block like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "digitalcap-abc123.firebaseapp.com",
  projectId: "digitalcap-abc123",
  storageBucket: "digitalcap-abc123.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

7. **COPY this entire config object** (just the values, not the `const firebaseConfig =` part)

**Outcome:** Firebase Web config obtained

---

## Step 8: Update Local Configuration

1. Open `/js/firebase-config.js` in your text editor
2. Find these lines:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

3. Replace each `"YOUR_*"` with the actual value from Step 7

**Example after update:**
```javascript
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "digitalcap-abc123.firebaseapp.com",
    projectId: "digitalcap-abc123",
    storageBucket: "digitalcap-abc123.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456"
};
```

4. Save the file
5. **Do NOT commit yet**

**Outcome:** Local Firebase config populated

---

## Phase 6B Complete

✅ Firebase project created
✅ Firestore database created (production mode, locked)
✅ Security rules deployed (default-deny)
✅ Email/Password authentication enabled
✅ Admin user created
✅ Admin UID saved (for Phase 6C)
✅ Web app registered
✅ Web config obtained
✅ Local config file updated

---

## What's Next

**Phase 6C** (future) will:
- Build admin login page (`/admin/index.html`)
- Load Firebase SDK on admin pages
- Add UID to security rules
- Test admin authentication
- Build admin dashboard shell

**DigitalCap public site remains unchanged.**

---

## Security Notes

- API Key is **public** (safe in code, safe to commit)
- Project ID is **public** (safe in code, safe to commit)
- Do NOT commit: service account keys, Admin SDK, passwords
- Do NOT use test mode
- All security enforced by Firestore rules, not client code
- Your password (Step 5) is stored securely by Firebase

---

## Troubleshooting

**Q: Database creation failed?**
A: Ensure you selected "Production mode" not "Test mode" in Step 3.

**Q: Can't find Web app config?**
A: Go to Project Settings (⚙️) → General → scroll to "Your apps" section.

**Q: Firestore still allows reads/writes?**
A: Ensure you published the rules in Step 4. Check Rules tab shows deny-all.

**Q: Lost the admin UID?**
A: Go to Authentication → Users tab → click user → view details → copy UID again.

---

## Done

Phase 6B backend foundation is ready. DigitalCap public site is unchanged.

Proceed to Phase 6C when ready.
