import * as firebase from 'firebase'
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyCyQQeE1OiAJ7eiuLIA14EwS5ggR6Znn08",
    authDomain: "storyhub-31a54.firebaseapp.com",
    databaseURL: "https://storyhub-31a54.firebaseio.com",
    projectId: "storyhub-31a54",
    storageBucket: "storyhub-31a54.appspot.com",
    messagingSenderId: "296344467630",
    appId: "1:296344467630:web:fc2fc4b1bdc01c60d3553f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();