// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// TODO: Adicionar SDKs para produtos Firebase que você deseja usar
// https://firebase.google.com/docs/web/setup#avsailable-libraries

// A configuração do Firebase do seu aplicativo da web
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//export default auth =  firebase.auth();
 //export const database = firebase.database();
