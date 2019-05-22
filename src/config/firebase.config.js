import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCUq3j9P_9f6rbUodYcmeitr86KNXOE9PA",
    authDomain: "promote-api.firebaseapp.com",
    databaseURL: "https://promote-api.firebaseio.com",
    projectId: "promote-api",
    storageBucket: "promote-api.appspot.com",
    messagingSenderId: "422113865622"
};

firebase.initializeApp(config);

export default firebase;