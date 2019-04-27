import firebase from 'firebase'

var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_MSG_ID
}

firebase.initializeApp(config)

export const db = firebase.firestore()


db.settings({
    timestampsInSnapshots: true
})

export const storage = firebase.storage()

export default firebase

