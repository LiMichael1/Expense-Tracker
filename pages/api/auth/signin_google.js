import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import {
  getDocs,
  addDoc,
  collection,
  docs,
  query,
  where,
} from 'firebase/firestore';

import { db, auth } from '../../../firebase/firebase';

const googleProvider = new GoogleAuthProvider();

export default async (req, res) => {
  try {
    const userCrediential = await signInWithPopup(auth, googleProvider);

    const user = userCrediential.user;

    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      const userInfo = {
        authProvider: 'google',
        user_id: user.uid,
        email,
      };

      const usersRef = collection(db, 'users');

      await addDoc(usersRef, userInfo);
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
