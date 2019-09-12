import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBxMzSlKpIhFImQoD-gtnhL-DpxYqHk3oY",
    authDomain: "hackathon-886b2.firebaseapp.com",
    databaseURL: "https://hackathon-886b2.firebaseio.com",
    projectId: "hackathon-886b2",
    storageBucket: "",
    messagingSenderId: "482382822066",
    appId: "1:482382822066:web:50b1a47083fe818b5427ab"
  };
  firebase.initializeApp(config);
  export const db = firebase.firestore();
  export const database = firebase.database();