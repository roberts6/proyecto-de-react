// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGkriidLrHg-85p391CcNVjDz9U7ApqyE",
  authDomain: "drop-it-56748.firebaseapp.com",
  projectId: "drop-it-56748",
  storageBucket: "drop-it-56748.appspot.com",
  messagingSenderId: "168687217361",
  appId: "1:168687217361:web:09bd31ab511ae4c04db3f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// esta constante "Db" (data base) recibe todo el archivo de configuración y lo exporto para ser usado en los componentes que sea necesario.
export const Db = getFirestore(app);
