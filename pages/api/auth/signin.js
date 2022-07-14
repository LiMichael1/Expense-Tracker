import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../firebase/firebase';

import jwt from 'jsonwebtoken';

/**
 * @route   POST api/auth/signin
 * @desc    Authenticate User
 * @access  Public
 */
export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        const error = !email ? 'No Email' : 'No Password';
        return res.status(400).json({ success: false, error });
      }

      const response = await signInWithEmailAndPassword(auth, email, password);

      const user = response.user;

      const payload = {
        user: {
          id: user.uid,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({ token });
        }
      );
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: 'Wrong Method. Need a POST request' });
  }
};
