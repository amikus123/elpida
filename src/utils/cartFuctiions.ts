import { CartData } from "../context/DataContext";

export const toFixedNumber = (num: number, digits = 2, base = 10) => {
  const pow = Math.pow(base, digits);
  return Math.round(num * pow) / pow;
};

export const countCartItems = (cart: CartData) => {
  let count = 0;
  const keys = Object.keys(cart);
  keys.forEach((item) => {
    count += cart[item].count;
  });
  return count;
};
export const countCartTotal = (cart: CartData) => {
  let total = 0;
  const keys = Object.keys(cart);
  keys.forEach((item) => {
    total += toFixedNumber(cart[item].price * cart[item].count, 2);
  });
  return total;
};
