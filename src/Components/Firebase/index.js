// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCE4VmKUbOrcgCnW79vzTh89TUGDHipjNk",
    authDomain: "slack-clone-bc655.firebaseapp.com",
    projectId: "slack-clone-bc655",
    storageBucket: "slack-clone-bc655.appspot.com",
    messagingSenderId: "882417903095",
    appId: "1:882417903095:web:851eb42ba7cc4af638faf2",
    measurementId: "G-G6JVCTR1B8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;