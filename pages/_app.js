import "../styles/globals.css";
import { createContext, useState, useEffect } from "react";
import { subscribeToUserChanges } from "../firebase/firebase";
export const userContext = createContext();
function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser2] = useState();

  useEffect(() => {
    const unsubscribe = subscribeToUserChanges(setCurrentUser2);
    return () => unsubscribe();
  }, []);

  return (
    <>
      <userContext.Provider value={currentUser}>
        <Component {...pageProps} />
      </userContext.Provider>
    </>
  );
}

export default MyApp;
