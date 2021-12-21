import { CartData } from "../context/DataContext";

export const countCartItems = (cart : CartData) =>{
    let count = 0
    const keys = Object.keys(cart)
    keys.forEach((item)=>{
        count += cart[item].count
    })
    return count
}

