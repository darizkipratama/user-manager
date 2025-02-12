import * as admin from 'firebase-admin';

let db: FirebaseFirestore.Firestore; 

if (process.env.NODE_ENV === 'production') { 
  const serviceAccount = require('./serviceAccountKey.json'); 

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: "https://<your-project-id>.firebaseio.com" 
  });
  db = admin.firestore();

} else { 
    admin.initializeApp({}); 
    db = admin.firestore();
}


export const firestore = db; // Export the Firestore instance