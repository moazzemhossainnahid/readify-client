// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7mOMC-VhRHdoZ9xhjCfpcP3odEkGPCV8",
  authDomain: "readify-51074.firebaseapp.com",
  projectId: "readify-51074",
  storageBucket: "readify-51074.appspot.com",
  messagingSenderId: "127926283246",
  appId: "1:127926283246:web:0b8d7846f06466d6d83cff"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 