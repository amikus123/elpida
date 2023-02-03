import { ItemProperties } from "../context/DataContext";
import {
  SidebarData,
  NameWithCount,
} from "../Pages/PublicPages/ProductListPage/tmpConst";
import { camelToSplit } from "./stringFunctions";

const keysToskip = {
  id: true,
  image: true,
  title: true,
  description: true,
};

// data is fetched from db
export const createSidebBarData = (data: ItemProperties[]): SidebarData[] => {
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
        // unique for each proeprty
        if (keysToskip[key] !== undefined) {
        } else {
          const value = item[key];
          const unique = key + "_" + value;
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
    console.error("wrong input", e);
  }

  const final: SidebarData[] = [];
  const properties = Object.keys(categoryMap);
  properties.forEach((key, index) => {
    const keyValues = categoryMap[key];
    const valueWithCount: NameWithCount[] = [];

    keyValues.forEach((value) => {
      const unique = properties[index] + "_" + value;
      const pair = { value, count: countMap[unique] };
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
  return final;
};

export const filterItems = (
  items: ItemProperties[],
  filterSettings: Record<string, string[] | number[]>
) => {
  const keys = Object.keys(filterSettings);
  for (const key of keys) {
    if (key === "price" || key === "alcoholPercentage") {
      const data: number[] = filterSettings[key] as number[];
      // data is min and max accepted data
      if (data.length === 2) {
        items = items.filter((item) => {
          const itemValue = item[key];

          if (itemValue >= data[0] && itemValue <= data[1]) {
            return true;
          } else {
            return false;
          }
        });
      } else {
      }
    } else {
      // fillter items based on content of filterSettings[key]
      // we are sure thet elements are of type string
      const data: string[] = filterSettings[key] as string[];
      if (data.length === 0) {
      } else {
        items = items.filter((item) => {
          const itemValue = item[key];
          // checks if item has key, then checks if value is valid
          if (
            item[key] !== undefined &&
            data.indexOf(String(itemValue)) === -1
          ) {
            console.error("not found");
            return false;
          } else {
            return true;
          }
        });
      }
    }
  }
  return items;
};

const coreKeys = {
  id: true,
  image: true,
  price: true,
  title: true,
};

export const splitProperties = (item: ItemProperties) => {
  const addonitial = {};
  const core = {};
  const keys = Object.keys(item);
  keys.forEach((key) => {
    if (coreKeys[key] !== undefined) {
      core[key] = String(item[key]);
    } else {
      addonitial[key] = String(item[key]);
    }
  });
  return { addonitial, core };
};

export const sortProperties = (arr: NameWithCount[]) => {
  const copy = [...arr];
  copy.sort((a, b) => {
    if (isNaN(Number(a.value)) && isNaN(Number(b.value))) {
      if (a.value > b.value) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (Number(a.value) > Number(b.value)) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return copy;
};
export const sortSidebar = (arr: SidebarData[]) => {
  const copy = [...arr];
  copy.sort((a, b) => {
    // if item can be converted to nan, we
    if (isNaN(Number(a.propertyName)) && isNaN(Number(b.propertyName))) {
      if (a.propertyName > b.propertyName) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (Number(a.propertyName) > Number(b.propertyName)) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return copy;
};
