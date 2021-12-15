import { capitalizeFirstLetter } from "./stringFunctions";

const keysToskip = {
  id: true,
  image: true,
  title:true,
  description:true,
};
export const createSidebBarData = (data: any[]) => {
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

  const final = []
  const properties = Object.keys(categoryMap)
  properties.forEach((key)=>{
    const values = categoryMap[key]
    const valueWithCount = []
    values.forEach((value)=>{
      const pair = {value,count:countMap[value]}
      valueWithCount.push(pair)
    })
    const title = key === "alcoholPercentage"?"Alcohol Percentage":capitalizeFirstLetter(key)

    const item = {
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


// {
//   title: "Energy class",
//   propertyName: "energyCLass",
//   values: [{val:a,count:1}, "B", "C"],
//   
// },