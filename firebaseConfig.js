const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

// parse the private key correctly
const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'); 

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey
  }),
  databaseURL: "https://seven-works-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };

