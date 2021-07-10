import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAJ_A9L2n7mZIAx5q_JVE5pethIwQxPJvE",
    authDomain: "netflix-clone-ddc5c.firebaseapp.com",
    projectId: "netflix-clone-ddc5c",
    storageBucket: "netflix-clone-ddc5c.appspot.com",
    messagingSenderId: "413300262",
    appId: "1:413300262:web:429002f25b36be4e0098e7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;