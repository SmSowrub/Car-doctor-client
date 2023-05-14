// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAN66jlhcK1kHvAQrLwCdUdHTAQC7xXs5Y",
  authDomain: "cars-doctor-b6d4e.firebaseapp.com",
  projectId: "cars-doctor-b6d4e",
  storageBucket: "cars-doctor-b6d4e.appspot.com",
  messagingSenderId: "968357742914",
  appId: "1:968357742914:web:b3aebb6da04160d51de0db"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;