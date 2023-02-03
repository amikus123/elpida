import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { loadStripe } from "@stripe/stripe-js";
import { CartData } from "../context/DataContext";
import { firebaseConfig, stripeSecret } from "./secret";
import { toFixedNumber } from "../utils/cartFuctiions";

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
    const cartItem = cart[key];
    const newObj = {
      price_data: {
        currency: "usd",
        unit_amount: toFixedNumber(cartItem.price * 100),
        product_data: {
          name: cartItem.title,
          images: [cartItem.image],
        },
      },
      quantity: cartItem.count,
    };
    res.push(newObj);
  }
  return res;
};
export const payWithStripe = async (cart: CartData) => {
  const formatedCartData = formatCartData(cart);
  const strapiCheckout = (await createStripeCheckout(formatedCartData)) as any;
  const stripe = await loadStripe(stripeSecret);
  const sessionId = strapiCheckout.data.id;
  stripe.redirectToCheckout({ sessionId });
};
