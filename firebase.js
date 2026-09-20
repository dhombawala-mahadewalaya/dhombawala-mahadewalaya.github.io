// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Firebase Authentication
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Firestore
import {
  initializeFirestore,
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// ===============================
// Firebase Configuration
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyBvFbt_NweE45VzTSdOUC4K1ddNGHmp0DI",
  authDomain: "dhombawala-mahadewalaya.firebaseapp.com",
  projectId: "dhombawala-mahadewalaya",
  storageBucket: "dhombawala-mahadewalaya.firebasestorage.app",
  messagingSenderId: "813351798456",
  appId: "1:813351798456:web:3f3f73313e66e3dfdc964d",
  measurementId: "G-HG7ED60K7E"
};


// ===============================
// Initialize Firebase
// ===============================

const app = initializeApp(firebaseConfig);


// ===============================
// Authentication
// ===============================

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


// ===============================
// Firestore
// ===============================

// Firestore browser connection
// Auto-detect long polling helps when WebChannel/WebSocket traffic is
// blocked or unreliable by a browser, proxy, hosting environment, etc.
// Firestore database ID. Your database in the Firebase Console is named
// "default" (NOT the special "(default)" one), so it must be passed explicitly.
const DB_ID = "default";

let db;
try {
  db = initializeFirestore(app, {
    // Force long polling: skips the slow WebChannel auto-detection and works
    // behind proxies / filters that break streaming connections.
    experimentalForceLongPolling: true
  }, DB_ID);
} catch (error) {
  // If Firestore was already initialized elsewhere, fall back safely.
  console.warn("Firestore initialization fallback:", error);
  db = getFirestore(app, DB_ID);
}


// ===============================
// Firebase is configured
// ===============================

const configured = true;


// ===============================
// Export
// ===============================

export {
  app,
  auth,
  db,
  provider,
  configured,

  // Authentication
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getRedirectResult,

  // Firestore
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
};