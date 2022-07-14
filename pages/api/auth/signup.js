import { createUserWithEmailAndPassword } from 'firebase/auth';

import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from '../../../firebase/firebase';

export default async (req, res) => {
  try {
    const { email, password, name } = req.body.body;

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
      birthDate: new Date(),
      mobileNumber: '',
    };

    const usersRef = collection(db, 'users');

    await addDoc(usersRef, userInfo);

    const payload = {
      user: {
        id: user.uid,
      },
      success: true,
    };

    // TODO: MAKE PAYLOAD INTO JWT TOKEN

    res.status(201).json(payload);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
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
