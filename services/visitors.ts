import { doc, setDoc, getDoc, increment, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export async function incrementVisitors() {
  try {
    const ref = doc(db, 'siteStats', 'summary');
    await setDoc(ref, { visitors: increment(1) }, { merge: true });
  } catch (e) {
    console.error('Could not increment visitors', e);
  }
}

export async function getVisitorCount(): Promise<number> {
  try {
    const ref = doc(db, 'siteStats', 'summary');
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      return data.visitors || 0;
    }
    return 0;
  } catch (e) {
    console.error('Could not get visitor count', e);
    return 0;
  }
}

export function listenVisitorCount(callback: (count: number) => void) {
  try {
    const ref = doc(db, 'siteStats', 'summary');
    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        callback(data.visitors || 0);
      } else {
        callback(0);
      }
    }, (err) => {
      console.error('Visitor count listener error', err);
    });
    return unsubscribe;
  } catch (e) {
    console.error('Could not listen visitor count', e);
    return () => {};
  }
}