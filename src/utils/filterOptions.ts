import { ItemProperties } from "../context/DataContext";
import { NameWithCount, SidebarData } from "../Pages/PublicPages/ProductListPage/ProductListPage";
import { camelToSplit, capitalizeFirstLetter } from "./stringFunctions";

const keysToskip = {
  id: true,
  image: true,
  title:true,
  description:true,
};


// data is fetched from db
export const createSidebBarData = (data: ItemProperties[])  : SidebarData[]=> {
  console.log(data, "CREATIN");
  // key  - found values
  const categoryMap = {};
  // name - count
  const countMap = {};
  try {
    data.forEach((item) => {
      const keys = Object.keys(item);
      keys.forEach((key) => {
        // check if value is stored
        // skip certain properties
        if (keysToskip[key] !== undefined) {
        } else {
          const value = item[key];
          if (categoryMap[key] === undefined) {
            categoryMap[key] = [];
          }
          if (categoryMap[key].indexOf(value) === -1) {
            // add
            categoryMap[key].push(value);
          }
          // increment count
          if (countMap[value] !== undefined) {
            countMap[value]++;
          } else {
            countMap[value] = 1;
          }
        }
      });
    });
  } catch (e) {
    console.log("wrong input", e);
  }

  const final :SidebarData[] = []
  const properties = Object.keys(categoryMap)
  properties.forEach((key)=>{
    const keyValues = categoryMap[key]
    const valueWithCount:NameWithCount[]= []
    keyValues.forEach((value)=>{
      const pair = {value,count:countMap[value]}
      valueWithCount.push(pair)
    })
    const title = camelToSplit(key)

    const item :SidebarData = {
      // i have access to array of values
      values:valueWithCount,
      title,
      propertyName:key,
      
    }
    final.push(item)
  }) 
  console.log("enmd", final);
  return final
};

const returnFilteredItems = () =>{
  
}