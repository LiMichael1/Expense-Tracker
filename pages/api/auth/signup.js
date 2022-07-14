import { createUserWithEmailAndPassword } from 'firebase/auth';

import { collection, addDoc } from 'firebase/firestore';
import jwt from 'jsonwebtoken';

import { auth, db } from '../../../firebase/firebase';

/**
 * @route    POST api/auth/signup
 * @desc     Create a new User
 * @access   Public
 */
export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, password, name } = req.body;

      if (!email || !password) {
        const error = !email ? 'No Email' : 'No Password';
        return res.status(400).json({ success: false, error });
      }

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = response.user;

      const { firstName, lastName } = getFirstAndLastNames(name);

      const userInfo = {
        authProvider: 'local',
        user_id: user.uid,
        email,
        // Default Initial Account Settings
        firstName,
        lastName,
        birthDate: new Date().valueOf(),
        mobileNumber: '',
      };

      const usersRef = collection(db, 'users');

      await addDoc(usersRef, userInfo);

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
          return res.status(201).json({ token });
        }
      );
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  } else {
    return res.staus(405).send('Wrong Method. Requires a POST method');
  }
};

const getFirstAndLastNames = (fullName) => {
  const temp = fullName.split(' ');
  temp.forEach((str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });

  const firstName = temp[0];
  const lastName = temp[temp.length - 1];

  return { firstName, lastName };
};
