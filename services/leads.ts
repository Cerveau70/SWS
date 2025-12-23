import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export type LeadPayload = {
  name: string;
  email: string;
  pole: string;
  description: string;
  source: string;
};

export async function createLead(payload: LeadPayload) {
  return addDoc(collection(db, 'leads'), {
    ...payload,
    createdAt: serverTimestamp(),
    status: 'nouveau',
  });
}


