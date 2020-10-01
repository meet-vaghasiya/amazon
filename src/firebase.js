import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAJu8zvaL08BMGqVBOJBW4BcOYzab5kHbU",
    authDomain: "challange-c1266.firebaseapp.com",
    databaseURL: "https://challange-c1266.firebaseio.com",
    projectId: "challange-c1266",
    storageBucket: "challange-c1266.appspot.com",
    messagingSenderId: "848156774022",
    appId: "1:848156774022:web:0bcac02e1a5f68d1440b07",
    measurementId: "G-1NHXKSWY7Y"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebaseApp.auth()

  export { db,auth}