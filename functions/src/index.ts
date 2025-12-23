import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// Fonction pour incrémenter les visiteurs
export const incrementVisitors = functions.https.onRequest(async (req, res) => {
  try {
    const ref = db.doc('analytics/overview');
    await ref.set({ totalVisits: admin.firestore.FieldValue.increment(1) }, { merge: true });
    
    const today = new Date().toISOString().split('T')[0];
    const dailyRef = db.doc(`daily_analytics/${today}`);
    await dailyRef.set({ count: admin.firestore.FieldValue.increment(1) }, { merge: true });

    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send({ message: "OK" });
  } catch (err) {
    res.status(500).send("Error");
  }
});