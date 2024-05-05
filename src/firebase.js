import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCO6hsAW3kXQ2168JirilZd80jGeaKXB8I",
    authDomain: "whatsapp-saas-357806.firebaseapp.com",
    databaseURL: "https://whatsapp-saas-357806-default-rtdb.firebaseio.com",
    projectId: "whatsapp-saas-357806",
    storageBucket: "whatsapp-saas-357806.appspot.com",
    messagingSenderId: "923485900501",
    appId: "1:923485900501:web:106191ba967332d3af5c5c",
    measurementId: "G-2QRX6EH5SB"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
console.log(auth);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, signInWithGoogle };
export default firebase;