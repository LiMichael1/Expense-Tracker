/**
 * Middleware to protect Private Routes from Non-Authenticated Users
 * @requirement header with an x-auth-token
 */
import jwt from 'jsonwebtoken';

export const Authentication_Middleware = (req, res) => {
  // Get Token from the Header
  const token = req.headers['x-auth-token'];

  // Check if not Token
  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: 'UnAuthenticated User' });
  }

  try {
    // Check if correct secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Put Valid Authenticated User in the Request Body
    req.user = decoded.user;
    return req.user;
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, error: 'Auth Token is not Valid' });
  }
};
