import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../firebase/firebase';

export default async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await signInWithEmailAndPassword(auth, email, password);

    const user = response.user;

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
