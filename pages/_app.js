import "../styles/globals.css";
import { createContext, useState, useEffect } from "react";
import { subscribeToUserChanges } from "../firebase/firebase";
export const userContext = createContext();
function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser2] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = subscribeToUserChanges(setCurrentUser2, setLoading);
    return () => unsubscribe();
  }, []);

  return (
    <>
      <userContext.Provider value={{ currentUser, loading }}>
        {loading ? null : <Component {...pageProps} />}
      </userContext.Provider>
    </>
  );
}

export default MyApp;
