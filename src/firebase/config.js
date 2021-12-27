import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAxTVi5GyZ6cvlM96SyroDZT_o64bfDRjc",
    authDomain: "fir-676c1.firebaseapp.com",
    projectId: "fir-676c1",
    storageBucket: "fir-676c1.appspot.com",
    messagingSenderId: "1053007567184",
    appId: "1:1053007567184:web:3648c34b172b3d667bf455",
    measurementId: "G-JV6G4V1BB6"
  };




   export default firebase.initializeApp(firebaseConfig)