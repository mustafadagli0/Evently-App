import { initializeApp } from "firebase/app";
import { initializeAuth, GoogleAuthProvider, signInWithPopup,getReactNativePersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore'u ekle
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAsRG5cRjH3ffiS7j6fZqcCAaGg-uGpvvk",
  authDomain: "evently-be8d9.firebaseapp.com",
  projectId: "evently-be8d9",
  storageBucket: "evently-be8d9.firebasestorage.app",
  messagingSenderId: "448412398583",
  appId: "1:448412398583:web:b54bbca5ce3ed0abc4f4f2",
  measurementId: "G-ZRT16J9CTC"
};



const app = initializeApp(firebaseConfig);

// Firebase Auth'u AsyncStorage ile başlat
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Firestore instance'ı



export { auth, provider, signInWithPopup, db }; // db'yi de export et