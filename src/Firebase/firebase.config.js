import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDS4MiCt9l80NWQ_Zgr-xHCLFfAgIncarA",
  authDomain: "foodflow-6447d.firebaseapp.com",
  projectId: "foodflow-6447d",
  storageBucket: "foodflow-6447d.appspot.com",
  messagingSenderId: "651473376770",
  appId: "1:651473376770:web:2f4c8e205baae3dd1f391b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
