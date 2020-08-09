import firebase from 'firebase/app'
import 'firebase/database'
import credentials from './credentials'

export const db = firebase
                .initializeApp({ databaseURL: credentials.config.databaseURL })
                .database()