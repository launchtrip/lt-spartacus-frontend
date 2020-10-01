//if (process.env.NODE_ENV === 'development') {
require('dotenv').config();
//}

const url = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const firebaseProjectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_APIKEY;
const firebaseMeasurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID;
const firebaseAppId = process.env.NEXT_PUBLIC_FIREBASE_APPID;
const firebaseStorageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const firebaseAuthDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const firebaseDatabaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
const firebaseSenderId = process.env.NEXT_PUBLIC_FIREBASE_SENDERID;
const firebasePrivateKey = process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY;
const firebaseClientEmail = process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
module.exports = {
  env: {
    SERVER_BASE_URL: url,
    FIREBASE_APIKEY: firebaseApiKey,
    FIREBASE_AUTH_DOMAIN: firebaseAuthDomain,
    FIREBASE_DATABASE_URL: firebaseDatabaseURL,
    FIREBASE_PROJECT_ID: firebaseProjectId,
    FIREBASE_STORAGE_BUCKET: firebaseStorageBucket,
    FIREBASE_SENDERID: firebaseSenderId,
    FIREBASE_APPID: firebaseAppId,
    FIREBASE_MEASUREMENTID: firebaseMeasurementId,
    FIREBASE_PRIVATE_KEY: firebasePrivateKey,
    FIREBASE_CLIENT_EMAIL: firebaseClientEmail,
    BASE_URL: baseUrl
  },
  target: 'serverless',
};
