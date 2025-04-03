// src/firebase.js
import { initializeApp } from 'firebase/app';  // Importamos la función para inicializar Firebase
import { getFirestore } from 'firebase/firestore';  // Importamos Firestore para interactuar con la base de datos

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcEVzb2LyANKG3L05VAjU2buGcfdWAbCw",
  authDomain: "spa-oasis-b6c1f.firebaseapp.com",
  projectId: "spa-oasis-b6c1f",
  storageBucket: "spa-oasis-b6c1f.appspot.com",
  messagingSenderId: "743957526867",
  appId: "1:743957526867:web:2726a66351fade6fdcc9a6"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos Firestore
const db = getFirestore(app); // Usamos `app` para obtener la referencia a Firestore

// Exportamos la referencia a Firestore para usarla en otros componentes
export { db };
