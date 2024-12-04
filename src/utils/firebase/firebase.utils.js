import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5lkuXYaRgYOWMmZnG6dgseNYs3UN0HZM",
  authDomain: "ecom-12037.firebaseapp.com",
  projectId: "ecom-12037",
  storageBucket: "ecom-12037.firebasestorage.app",
  messagingSenderId: "907648776132",
  appId: "1:907648776132:web:dcc1e6d07b607e39b11691"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
const provider = new GoogleAuthProvider();
// Set up Google auth
provider.setCustomParameters({
    prompt: "select_account" // Force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
