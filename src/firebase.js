import firebase from "firebase";
require("firebase/firestore");
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBgrvsUieINOyNpmVW-Fs1wG-SUpi5yaBM",
    authDomain: "vue-commerce-184d5.firebaseapp.com",
    databaseURL: "https://vue-commerce-184d5.firebaseio.com",
    projectId: "vue-commerce-184d5",
    storageBucket: "vue-commerce-184d5.appspot.com",
    messagingSenderId: "1021255710877",
    appId: "1:1021255710877:web:8736f4352da1a090"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }