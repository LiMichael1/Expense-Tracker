import { where } from 'firebase/firestore';

export default (user_id) => {
  return where('user_id', '==', user_id);
};
