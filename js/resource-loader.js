// DigitalCap Resource Loader
// Fetches RESOURCE records from Firestore by ID
// Fails silently; R05 does not depend on success

async function getResources(resourceIds) {
  // Safety: if no resourceIds, return empty
  if (!resourceIds || !Array.isArray(resourceIds) || resourceIds.length === 0) {
    return [];
  }

  // Safety: if Firebase not available, return empty
  if (!window.digitalCapFirebase || !window.digitalCapFirebase.db) {
    console.warn('[ResourceLoader] Firebase not available; skipping resource load');
    return [];
  }

  try {
    const db = window.digitalCapFirebase.db;
    const { doc: firebaseDoc, getDoc: firebaseGetDoc } = window.digitalCapFirebase;
    const resources = [];

    for (const id of resourceIds) {
      try {
        const docRef = firebaseDoc(db, 'resourcesPublished', id);
        const docSnap = await firebaseGetDoc(docRef);

        if (docSnap.exists()) {
          resources.push(docSnap.data());
        }
      } catch (err) {
        console.warn(`[ResourceLoader] Failed to load resource ${id}:`, err.message);
        // Continue to next resource; don't fail entire load
      }
    }

    return resources;
  } catch (err) {
    console.warn('[ResourceLoader] Resource load failed:', err.message);
    return []; // Silent failure; R05 continues without resources
  }
}
