// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'
import config from './credentials'

export const db = firebase
  .initializeApp({ databaseURL: config.config.databaseURL })
  .database()
