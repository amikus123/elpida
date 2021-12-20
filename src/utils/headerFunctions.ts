import { TextLink } from "../constans/types";
import { Inventory, ItemProperties } from "../context/DataContext";


export const getMatchingSuggestions = (text:string,category:string,items:Inventory) :TextLink[]=>{
    const res :TextLink[]= []
    // if category is all. we return all matching
     // else we only return items from matching cateory
     if(text === ""){
        // do dont do anything
     }
    else if(category === "All"){
        const categories = Object.keys(items)
        for(const key of categories){
            const itemsFromCategory = items[key]
            const filteredItems = getPairsFromCategory(text,key,itemsFromCategory)
           res.push.apply(res,filteredItems)
        }
    }else{
        // inventroy kesy are lawyas in lower case
        const itemsFromCategory = items[category.toLowerCase()]
        const filteredItems = getPairsFromCategory(text,category,itemsFromCategory)
       res.push.apply(res,filteredItems)
    }
     if(res.length===0){
         res.push({
            title:"No matches found!",
            link:"#"
        })
     }
    console.log(res)
    return res
}

const getPairsFromCategory = (text:string,category:string,itemsFromCategory:ItemProperties[]) =>{
    const pairs = []
     itemsFromCategory.forEach((item)=>{
        if(item.title.toLowerCase().startsWith(text.toLowerCase())){
            pairs.push({
                title:item.title,
                link : createLink(item.title,category)
            })
        }
    })
    return pairs
}


export const getMatchingItems = (text:string,category:string,items:Inventory) :ItemProperties[]=>{
    const res :ItemProperties[]= []
    // if category is all. we return all matching
     // else we only return items from matching cateory
     if(text === ""){
        // do dont do anything
     }
    else if(category === "All"){
        const categories = Object.keys(items)
        for(const key of categories){
            const itemsFromCategory = items[key]
            const filteredItems = getMatchingItemsFromCategory(text,key,itemsFromCategory)
           res.push.apply(res,filteredItems)
        }
    }else{
        // inventroy kesy are lawyas in lower case
        const itemsFromCategory = items[category.toLowerCase()]
        const filteredItems = getMatchingItemsFromCategory(text,category,itemsFromCategory)
       res.push.apply(res,filteredItems)
    }
  
    console.log("matechs",res)
    return res
}

const getMatchingItemsFromCategory = (text:string,category:string,itemsFromCategory:ItemProperties[]):ItemProperties[] =>{
    const pairs = itemsFromCategory.filter((item)=>{
        return item.title.toLowerCase().startsWith(text.toLowerCase())
    })
    return pairs
}


const createLink = (title:string,category:string)=>{
    return `/categories/${category}/${title}`
}