import { ItemProperties } from "../context/DataContext";
import { SidebarData, NameWithCount } from "../Pages/PublicPages/ProductListPage/tmpConst";
import { camelToSplit } from "./stringFunctions";

const keysToskip = {
  id: true,
  image: true,
  title: true,
  description: true,
};

// data is fetched from db
export const createSidebBarData = (data: ItemProperties[]): SidebarData[] => {
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
        // uniqe for each proeprty
        if (keysToskip[key] !== undefined) {
        } else {
          const value = item[key];
          const unique = key + "_"+value
          if (categoryMap[key] === undefined) {
            categoryMap[key] = [];
          }
          if (categoryMap[key].indexOf(value) === -1) {
            // add
            categoryMap[key].push(value);
          }
          // increment count
          if (countMap[unique] !== undefined) {
            countMap[unique]++;
          } else {
            countMap[unique] = 1;
          }
        }
      });
    });
  } catch (e) {
    console.log("wrong input", e);
  }

  const final: SidebarData[] = [];
  const properties = Object.keys(categoryMap);
  properties.forEach((key,index) => {
    const keyValues = categoryMap[key];
    const valueWithCount: NameWithCount[] = [];
    
    console.log(keyValues,"XDDDD",properties[index])
    keyValues.forEach((value) => {
      const unique = properties[index] + "_"+value
      const pair = {value, count: countMap[unique] };
      valueWithCount.push(pair);
    });
    const title = camelToSplit(key);

    const item: SidebarData = {
      // i have access to array of values
      values: valueWithCount,
      title,
      propertyName: key,
    };
    final.push(item);
  });
  console.log("enmd", final);
  return final;
};

export const filterItems = (
  items: ItemProperties[],
  filterSettings: Record<string, string[]>
) => {
  const keys = Object.keys(filterSettings);

  for (const key of keys) {
    if (key === "maxPrice") {
    } else if (key === "minPrice") {
    } else if (key !== "price") {
      // fillter items based on content of filterSettings[key]
      items = items.filter((item) => {
        const itemValue = item[key];
        console.log(filterSettings[key], "xdddd", itemValue);
        if (filterSettings[key].length === 0) {
          console.log("no entires");
          return true;
        }
        if (filterSettings[key].indexOf(String(itemValue)) === -1) {
          console.log("not found");
          return false;
        } else {
          console.log("found");
          return true;
        }
      });
    }
  }
  console.log(items, "end of filter");
  return items;
};


const coreKeys = {
  id: true,
  image: true,
  price:true,
  title:true
};

export const splitProperties = (item:ItemProperties) => {
  const addonitial = {};
  const core = {};
  const keys = Object.keys(item);
  keys.forEach((key) => {
    if (coreKeys[key] !== undefined) {
      core[key] = String(item[key])
    } else {

      addonitial[key] =  String(item[key])
    }
  });
  return { addonitial, core }
};