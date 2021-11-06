
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/main";

export const UserContext = createContext({
  signUp:(arg1:string,arg2:string)=>{},
  currentUser:null
});

export const UserProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const signUp = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    //
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(currentUser);
    });
    return unsubscribe
  }, []);

  const val = {signUp,currentUser};
  return (
    <UserContext.Provider value={{ ...val }}>{children}</UserContext.Provider>
  );
};
