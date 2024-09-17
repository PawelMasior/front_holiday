// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB61F845LDtLAjWv9Ob7NKclnqtfW1xchs",
  authDomain: "lotan-general.firebaseapp.com",
  projectId: "lotan-general",
  storageBucket: "lotan-general.appspot.com",
  messagingSenderId: "861189857107",
  appId: "1:861189857107:web:5c7f68728d2a7012de8ba6",
  measurementId: "G-QWC8YM5CQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export const initFirebase = () => {
  return app;
}

export const initFirebaseAnalytics = () => {
  return analytics;
}

export const storage = getStorage(app);
export const database = getFirestore(app);

export const maxFreeUploads = 30;