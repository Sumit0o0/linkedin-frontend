import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLVEEGOuTuzg16r2nJVhdMvOt6suLVTPQ",
  authDomain: "intact-d64c0.firebaseapp.com",
  projectId: "intact-d64c0",
  storageBucket: "intact-d64c0.appspot.com",
  messagingSenderId: "248168321381",
  appId: "1:248168321381:web:36ebe7cd759c50c55e118c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app