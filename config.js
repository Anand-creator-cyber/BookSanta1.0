import firebase from 'firebase';
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey : "AIzaSyAygGeGtc4j7H9LlsqCfEd79c5dTOth5JQ",
    authDomain: "booksanta-696e4.firebaseapp.com",
    databaseURL: "https://booksanta-696e4.firebaseio.com",
    projectId: "booksanta-696e4",
    storageBucket: "booksanta-696e4.appspot.com",
    messagingSenderId: "284711316000",
    appId: "1:284711316000:web:a46411f21f2e902205ea45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();