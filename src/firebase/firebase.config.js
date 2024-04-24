// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTUTAbBZUtw5OHSvmB0OqUkzYWZbMoEIY",
  authDomain: "authentications-project-dbb8a.firebaseapp.com",
  projectId: "authentications-project-dbb8a",
  storageBucket: "authentications-project-dbb8a.appspot.com",
  messagingSenderId: "644936551170",
  appId: "1:644936551170:web:91fb107c669e206991101b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);