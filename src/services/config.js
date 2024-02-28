// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDVgyLV1fop_dORZw-PxvcejnrZF9nhxnA",
    authDomain: "tienda-react-lt.firebaseapp.com",
    projectId: "tienda-react-lt",
    storageBucket: "tienda-react-lt.appspot.com",
    messagingSenderId: "177295729292",
    appId: "1:177295729292:web:72b3479de01399de8251a9",
    measurementId: "G-TRY7JDXEJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const data = getFirestore(app);