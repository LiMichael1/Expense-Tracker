import { updatePassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../firebase/firebase';

/**
 * @route   PUT api/auth/resetPassword
 * @desc    Reset Password
 * @access  Private
 */

export default async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const { email, oldPassword, newPassword } = req.body;

      if (!email || !oldPassword || !newPassword) {
        const error = !email
          ? 'Please Enter an Email Address'
          : !oldPassword
          ? 'Please Enter Old Password'
          : 'Please Enter New Password';
        return res.status(400).json({ success: false, error });
      }

      const response = await signInWithEmailAndPassword(
        auth,
        email,
        oldPassword
      );
      const user = response.user;

      await updatePassword(user, newPassword);

      return res
        .status(200)
        .json({ success: true, message: `Updated Password for ${user.email}` });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  } else {
    return res.status(405).json({
      success: false,
      error: 'UnAuthorized Method. Requires a PUT request',
    });
  }
};
