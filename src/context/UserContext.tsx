import {
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { createContext, useState, useEffect } from "react";
import { BaseResposne } from "../firebase/consts";
import { myAuth } from "../firebase/main";
import { createPromise } from "../utils/generalFunctions";

const a: any = null;

export const UserContext = createContext({
  signup: async (arg1: string, arg2: string) => {
    return createPromise();
  },
  login: async (arg1: string, arg2: string) => {
    return createPromise();
  },
  signout: async () => {
    return createPromise();
  },
  currentUser: a,
});

export const UserProvider = ({ children }: { children: any }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  // check if user i present
  const [loading, setLoading] = useState(true);

  const signup = async (
    email: string,
    password: string
  ): Promise<BaseResposne> => {
    try {
      await createUserWithEmailAndPassword(myAuth, email, password);
      return {
        error: false,
        text: "Succ",
      };
    } catch (e: any) {
      return {
        error: true,
        text: e.code,
      };
    }
  };
  const login = async (
    email: string,
    password: string
  ): Promise<BaseResposne> => {
    try {
      await signInWithEmailAndPassword(myAuth, email, password);
      return {
        error: false,
        text: "Succ",
      };
    } catch (e: any) {
      return {
        error: true,
        text: e.code,
      };
    }
  };
  const signout = async () => {
    try {
      await signOut(myAuth);
      return {
        error: false,
        text: "Succ",
      };
    } catch (e: any) {
      return {
        error: true,
        text: e.code,
      };
    }
  };
  useEffect(() => {
    const unsubscribe = myAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(user, "context user");
    });
    return unsubscribe;
  }, []);

  const val = { signup, currentUser, login, signout };
  return (
    <UserContext.Provider value={{ ...val }}>
      {loading ? null : <>{children}</>}
    </UserContext.Provider>
  );
};
