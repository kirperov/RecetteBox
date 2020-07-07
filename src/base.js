import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIUt-VVRYl410JTpqo4UWQu_BRTVeYOPk",
  authDomain: "recettebox-6fc70.firebaseapp.com",
  databaseURL: "https://recettebox-6fc70.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
