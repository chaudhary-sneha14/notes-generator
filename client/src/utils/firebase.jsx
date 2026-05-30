import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnote-4a5ea.firebaseapp.com",
  projectId: "authexamnote-4a5ea",
  storageBucket: "authexamnote-4a5ea.firebasestorage.app",
  messagingSenderId: "126756603016",
  appId: "1:126756603016:web:b7a2f54f07f3d744d74b3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
