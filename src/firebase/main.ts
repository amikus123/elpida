import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { loadStripe } from "@stripe/stripe-js";
import { CardData } from "../constans/types";
import { CartData } from "../context/DataContext";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase

export const myApp = initializeApp(firebaseConfig);
export const myAuth = getAuth(myApp);
export const myDb = getFirestore(myApp);
export const myFunctions = getFunctions();

export const myStorage = getStorage(myApp);
export const createStripeCheckout = httpsCallable(
  myFunctions,
  "createStripeCheckout"
);

const formatCartData = (cart: CartData) => {
  const res = [];
  for (const key in cart) {
    const cartItem = cart[key]
    const newObj = {
      price_data: {
        currency: "usd",
        unit_amount: cartItem.price * 100,
        product_data: {
          name: cartItem.title,
          images: [cartItem.image],
        },
      },
      quantity: cartItem.count,
    };
    res.push(newObj)
  }
  return res


};
export const fun = async (cart: CartData) => {
  const formatedCartData = formatCartData(cart);
  const xd = (await createStripeCheckout(formatedCartData)) as any;
  const stripe = await loadStripe(
    "pk_test_51JlyyPEDxvVxpPWpi7mNLBMHJwe2D7MhCLPR3sa46j0uMQ59xCzoA429v6bKWvSAT8r1B5VfsMrEzhOk9E0j32jj00eCOJGeYT"
  );
  const sessionId = xd.data.id;
  stripe.redirectToCheckout({ sessionId });
};
