import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDwp6WitDfOqcWIbLDWFkCmjPh8fR7_8Y',
  authDomain: 'music2-e43ef.firebaseapp.com',
  projectId: 'music2-e43ef',
  storageBucket: 'music2-e43ef.appspot.com',

  appId: '1:59660704910:web:7887ff4506a69c4bc8fddf'
}

export default firebase.initializeApp(firebaseConfig)
