import firebaseClient from 'firebase/app';
import 'firebase/auth';

const firebaseClientConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmai: process.env.FIREBASE_CLIENT_EMAIL,
};
console.log('firebaseClientConfig===>>>', firebaseClientConfig);
console.log('SERVER_BASE_URL===>>>', process.env.SERVER_BASE_URL);
console.log('BASE_URL===>>>', process.env.BASE_URL);
if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseClientConfig);
}

export default firebaseClient;
