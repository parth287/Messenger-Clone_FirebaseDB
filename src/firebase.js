import firebase from 'firebase'; 


const firebaseApp = firebase.initializeApp({
//config details 
apiKey: "AIzaSyAfzTDHm2pjZU09O1RK2zQh_mkIbINV7vE",
  authDomain: "fb-messenger-clone-ccb3b.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-ccb3b.firebaseio.com",
  projectId: "fb-messenger-clone-ccb3b",
  storageBucket: "fb-messenger-clone-ccb3b.appspot.com",
  messagingSenderId: "782276810659",
  appId: "1:782276810659:web:6be1a32d3423d7b0d56c16",
  measurementId: "G-K3QFM3E5RX"
});

const db = firebaseApp.firestore();

export default db;