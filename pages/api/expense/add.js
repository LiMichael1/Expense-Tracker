/**
 * This File Handles POST request for adding Expenses to the Database
 * @author Michael Li
 * @version 1.0.0
 */
import { db, storage } from '../../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

import { v4 } from 'uuid';

/**
 * Necessary Data required in the Request Body
 *
 * @param {string} image      (Optional) Data URL
 * @param {string} imageName  (Optional) Image File Name
 * @param {string} name       Expense Name
 * @param {string} business   Business Name
 * @param {string} type       Type of Expense
 * @param {Date}   date       Date of Expense
 * @param {string} user_id    Authenticated User ID
 * @param {boolean} recur     Is it a Recurring Expense
 *
 * @returns {string} User ID
 */

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { image, imageName, name, business, type, date, user_id, recur } =
      req.body;

    try {
      // Get Image URL from Firebase Storage
      const imgURL = await uploadImageToFirebase(
        image,
        imageName,
        'ExpensePhotos/'
      );

      // Payload to be uploaded to Firestore DB
      const expense = {
        image: imgURL,
        name,
        business,
        type,
        date,
        user_id,
        recur,
      };

      // Reference to the Firestore Database Location
      const expRef = collection(db, 'expenses');

      // Add Payload to the Database
      const doc = await addDoc(expRef, expense);

      res.status(201).json({ id: doc.id, success: true });
    } catch (err) {
      // Database Entry Failure
      res.status(500).json({ error: err.message, success: false });
    }
  }
}

/**
 * Helper Function to Upload Image onto Firebase Storage
 *
 * @param {string} img        Data URL
 * @param {string} name       Image Name
 * @param {string} directory  Destinated Firebase Storage Directory
 *yarn dev
 * @returns {string} Firebase URL to the Image
 */
const uploadImageToFirebase = async (img, name, directory) => {
  try {
    const imgRef = ref(storage, `${directory + name + v4()}`);

    const snapshot = await uploadString(imgRef, img, 'data_url');
    const url = await getDownloadURL(imgRef);

    return url;
  } catch (err) {
    console.log('Upload Function Error');
    throw err.message;
  }
};
