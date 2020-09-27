import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCru6a5vcBQIfzyiCwHC_6WNUhgbmTm5HI",
    authDomain: "diving-point-map.firebaseapp.com",
    databaseURL: "https://diving-point-map.firebaseio.com",
    projectId: "diving-point-map",
    storageBucket: "diving-point-map.appspot.com",
    messagingSenderId: "1001187361611",
    appId: "1:1001187361611:web:ba5b7f4408970a4b3fdece",
    measurementId: "G-XXPQMSK7TL"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
    }else{
    firebase.app();
    }

export default firebase;