
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC7aCm4szOyby1utxZpZk7fhfim8Aac8fE",
  authDomain: "ecommerce-with-react-f7541.firebaseapp.com",
  projectId: "ecommerce-with-react-f7541",
  storageBucket: "ecommerce-with-react-f7541.appspot.com",
  messagingSenderId: "148384538652",
  appId: "1:148384538652:web:8aa0e3090ff607dc67bfd9",
  measurementId: "G-9WC9ZZLRN9"
};

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export { auth, fs, storage, app as firebase };
