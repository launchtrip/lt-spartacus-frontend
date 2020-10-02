require('dotenv').config();

// const url = process.env.SERVER_BASE_URL;
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
const firebaseApiKey = process.env.FIREBASE_APIKEY;
const firebaseMeasurementId = process.env.FIREBASE_MEASUREMENTID;
const firebaseAppId = process.env.FIREBASE_APPID;
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
const firebaseDatabaseURL = process.env.FIREBASE_DATABASE_URL;
const firebaseSenderId = process.env.FIREBASE_SENDERID;
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
const firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const baseUrl = process.env.BASE_URL;
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
