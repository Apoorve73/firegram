import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDicVEBWorQR9oQkJ-QSVqZ9z7gAo1EtJw",
  authDomain: "firegram-e6c56.firebaseapp.com",
  projectId: "firegram-e6c56",
  storageBucket: "firegram-e6c56.appspot.com",
  messagingSenderId: "730589581031",
  appId: "1:730589581031:web:57d55be2ed192a8e005c42"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };