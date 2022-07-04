
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXMETP-thCXGQNhZsk_n787wamQHCFnZk",
    authDomain: "olxproject-97c69.firebaseapp.com",
    projectId: "olxproject-97c69",
    storageBucket: "olxproject-97c69.appspot.com",
    messagingSenderId: "7741973779",
    appId: "1:7741973779:web:0f63da3e3e0d256401a6e6",
    measurementId: "G-LZ4RTFJ0Z5"
  };

  export default firebase.initializeApp(firebaseConfig)
