import { CartData } from "../context/DataContext";

export const countCartItems = (cart : CartData) =>{
    let count = 0
    const keys = Object.keys(cart)
    keys.forEach((item)=>{
        count += cart[item].count
    })
    return count
}
export const countCartTotal = (cart : CartData) =>{
    let total = 0
    const keys = Object.keys(cart)
    keys.forEach((item)=>{
        total += cart[item].price *  cart[item].count
    })
    return total
}



