import firebase from 'firebase';
require('dotenv').config()

const config = {
    apiKey: "AIzaSyB3anOAUK4rkdvZ-qQGd8QL9C8K8qlEzCU",
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "rnsit-chronicle",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER
  };
firebase.initializeApp(config);

export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})

export default firebase;