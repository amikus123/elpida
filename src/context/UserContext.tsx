import {
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword
} from "firebase/auth";

import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/main";

const a: any = null;
export const UserContext = createContext({
  signup: async (arg1: string, arg2: string) => {
    const a: any = "";
    return a;
  },
  login:async (arg1: string, arg2: string) => {
    const a: any = "";
    return a;
  },
  currentUser: a,
});

export const UserProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  // check if user i present
  const [loading, setLoading] = useState(true);
  const getFieldTypeFromErrorCode = (code: string) => {
    if (code.indexOf("password") !== -1) {
      return "password";
    } else if (code.indexOf("email") !== -1) {
      return "email";
    } else {
      return "";
    } 
  };
  const signup = async (email: string, password: string) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      // returns word map, keys are fileds whre message should be shown
      console.error(e);
      const a: any = e;
      console.error(a.code);
      const targetedField = getFieldTypeFromErrorCode(a.code);
      console.error(a.message);
      return [targetedField, a.message];
    }
  };
  const login = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      // returns word map, keys are fileds whre message should be shown
      console.error(e);
      const a: any = e;
      console.error(a.code);
      const targetedField = getFieldTypeFromErrorCode(a.code);
      console.error(a.message);
      return [targetedField, a.message];
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(user,"context user")
    });
    return unsubscribe;
  }, []);

  const val = { signup, currentUser ,login};
  return (
    <UserContext.Provider value={{ ...val }}>
      {loading ? null : <>{ children }</>}
    </UserContext.Provider>
  );
};
