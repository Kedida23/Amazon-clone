// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCiacObQHDIajiebYfuTfj_w7N-4IeR7VY",
	authDomain: "clone-15f71.firebaseapp.com",
	projectId: "clone-15f71",
	storageBucket: "clone-15f71.appspot.com",
	messagingSenderId: "439673624399",
	appId: "1:439673624399:web:ffaeb4f67af77addab573a",
	measurementId: "G-CE2PXG7EPG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
