export const capitalizeFirstLetter = (str:string)  =>{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// convert camelCase to Camel Case 
// split string 
export const camelToSplit = (str:string)  =>{
  str = String(str)
  return capitalizeFirstLetter(str.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(" "))

}

// used in products in categories, to add zl, % and so on 
export const determineExtraSymbol = (key:string )=>{
  if(key === "alcoholPercentage"){
    return "%"
  }
  return ""
}