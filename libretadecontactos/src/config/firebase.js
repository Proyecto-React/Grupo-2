import firebase from './firebase';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

var firebaseConfig = {

  apiKey: "AIzaSyC5J1ngVwuJjElSyGSmo24VKqyYi9hd5C4",

  authDomain: "libreta-de-contactos-943a2.firebaseapp.com",

  projectId: "libreta-de-contactos-943a2",

  storageBucket: "libreta-de-contactos-943a2.appspot.com",

  messagingSenderId: "906941065069",

  appId: "1:906941065069:web:a5724375ff852d9d145c64"

};
firebase.initializeApp(firebaseConfig);
firebase.auth=firebase.auth();
firebase.db=firebase.firestore();
console.log("Conexion Firebase",firebase.database())

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default firebase;