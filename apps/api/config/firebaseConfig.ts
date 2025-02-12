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
    admin.initializeApp({ projectId: "backend-repo-b2133" }); 
    db = admin.firestore();
    db.settings({
      host: 'localhost:8080', // Firestore emulator host and port
      ssl: false,
    });
    console.log('Using the local firebase emulator');
}


export const firestore = db; // Export the Firestore instance