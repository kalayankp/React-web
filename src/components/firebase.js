import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiQQKfTvfzmAzIb8S19c2MMSOU0YRfFwM",
  authDomain: "oneservice-dbcdb.firebaseapp.com",
  projectId: "oneservice-dbcdb",
  storageBucket: "oneservice-dbcdb.appspot.com",
  messagingSenderId: "1992278999",
  appId: "1:1992278999:web:17171683aa995d63624192",
  measurementId: "G-2FT2HLJD0V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
