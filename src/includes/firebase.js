import firebase from 'firebase/app'
import 'firebase/auth'

import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDwp6WitDfOqcWIbLDWFkCmjPh8fR7_8Y',
  authDomain: 'music2-e43ef.firebaseapp.com',
  projectId: 'music2-e43ef',
  storageBucket: 'music2-e43ef.appspot.com',

  appId: '1:59660704910:web:7887ff4506a69c4bc8fddf'
}


//Initialize firebase
 firebase.initializeApp(firebaseConfig)

 //
 const auth = firebase.auth()

 //database reference 
 //object with methods and properties to interact with database 
 const db = firebase.firestore()

 //object contains the name of the database
 //we export it to be accessible in multiple components
 //this function returns an object with methods and properties 
 //for working with the user's collection
 const usersCollection = db.collection('users')
 
 export {
  auth, 
  db, 
  usersCollection
 }
