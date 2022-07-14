import { signOut } from 'firebase/auth';

import { auth } from '../../../firebase/firebase';

export default async (req, res) => {
  try {
    const response = await signOut(auth);

    res.status(200).json({ success: true, msg: response });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
