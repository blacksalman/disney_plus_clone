import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore,collection } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBTCcgTk9T490BwGGP3Rky0ITqKb0aCnA8",
    authDomain: "disneyplus-clone-eb134.firebaseapp.com",
    projectId: "disneyplus-clone-eb134",
    storageBucket: "disneyplus-clone-eb134.appspot.com",
    messagingSenderId: "850227241273",
    appId: "1:850227241273:web:f0048842a8ac1eaa1908e8"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const colRef = collection(db,"movies")

const provider = new GoogleAuthProvider(app);
const storage = getStorage(app);

export {auth, provider, storage};
export default colRef;