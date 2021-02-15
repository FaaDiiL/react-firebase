import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDmtXXvYQS7lf2N9Ak7TwIpMm07j__P9zk',
  authDomain: 'react-firebase-2e8be.firebaseapp.com',
  projectId: 'react-firebase-2e8be',
  storageBucket: 'react-firebase-2e8be.appspot.com',
  messagingSenderId: '897168354322',
  appId: '1:897168354322:web:e39b8120b4a5a5e12f3ccb',
  measurementId: 'G-8EPSSJG3B7',
}
// Initialize Firebase

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }
}
export default Firebase
