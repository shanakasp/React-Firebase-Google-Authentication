// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithGoogle, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeRh7B3LjTbVj3hDUiIBOW7QEBxXlktAg",
  authDomain: "auth-7eaee.firebaseapp.com",
  projectId: "auth-7eaee",
  storageBucket: "auth-7eaee.appspot.com",
  messagingSenderId: "1057708975899",
  appId: "1:1057708975899:web:729c58d7649d7e88c815be",
  measurementId: "G-NZSBVDSRX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provier = new GoogleAuthProvider();

export const signInWithGoogle = ()=>
{
signInWithPopup(auth, provier).then((result) => {
console.log(result);

const name = result.user.displayName;
const email = result.user.email;
const profilepic = result.user.photoURL;

localStorage.setItem("name", name)
localStorage.setItem("email", email)
localStorage.setItem("profilepic", profilepic)
}).catch((error) =>
{
console.log(error);
})
};