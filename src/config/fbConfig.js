import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAPI1y5OWptqihlL7V01offwB9ATc5dIpk",
  authDomain: "eliafilmfestival.firebaseapp.com",
  databaseURL: "https://eliafilmfestival.firebaseio.com",
  projectId: "eliafilmfestival",
  storageBucket: "eliafilmfestival.appspot.com",
  messagingSenderId: "1032966098066"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 