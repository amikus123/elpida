import {
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { createContext, useState, useEffect } from "react";
import { myAuth } from "../firebase/main";
import { BaseResposne } from "../constans/types";
import { createPromise } from "../utils/generalFunctions";

const errorMessages = {
  "auth/wrong-password": "Wrong password",
  "auth/too-many-requests": "Too many failed attempts, try later",
  "auth/weak-password": "Password is too weak",
  "auth/email-already-exists": "Email is already in use",
  "auth/email-already-in-use": "Email is already in use",
  "auth/invalid-email": "Email is not valid",
};

const getErrorMessage = (str: string) => {
  for (const item of Object.entries(errorMessages)) {
    if (str === item[0]) {
      return item[1];
    }
  }
  return "Error has occured";
};
// we either have to preserve any, or add interface for context
const placeholderUser: User | any = null;

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
  currentUser: placeholderUser,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (
    email: string,
    password: string
  ): Promise<BaseResposne> => {
    try {
      await createUserWithEmailAndPassword(myAuth, email, password);
      return {
        error: false,
        text: "Succesfully created account",
      };
    } catch (e: any) {
      return {
        error: true,
        text: getErrorMessage(e.code),
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
        text: "Succesfully logged in",
      };
    } catch (e: any) {
      console.error({ e });
      return {
        error: true,
        text: getErrorMessage(e.code),
      };
    }
  };
  const signout = async () => {
    try {
      await signOut(myAuth);

      return {
        error: false,
        text: "Succesfully signed out",
      };
    } catch (e: any) {
      return {
        error: true,
        text: getErrorMessage(e.code),
      };
    }
  };
  useEffect(() => {
    const unsubscribe = myAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
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
