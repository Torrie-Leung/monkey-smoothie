import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD8xNt-HSu6-JkgpsoO-tAS4r4XxNQkc3k",
    authDomain: "monkey-smoothie.firebaseapp.com",
    databaseURL: "https://monkey-smoothie.firebaseio.com",
    projectId: "monkey-smoothie",
    storageBucket: "monkey-smoothie.appspot.com",
    messagingSenderId: "166410416044",
    appId: "1:166410416044:web:96325afd3120e607"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  //export firestore database
  export default firebaseApp.firestore()