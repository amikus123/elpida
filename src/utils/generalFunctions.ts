import { BaseResposne } from "../constans/types";
import { Inventory, ItemProperties } from "../context/DataContext";

// * used in contenxt to simulate type, this is nevet called in actual code
export const createPromise = async (): Promise<BaseResposne> => {
  function x() {
    var promise = new Promise(function (resolve, reject) {
      window.setTimeout(function () {
        resolve("doddne!");
      });
    });
    return promise;
  }
  let res: any = await x;
  res = res as unknown as Promise<BaseResposne>;
  return res;
};

export const createLink = (item: ItemProperties, category: string) => {
  return `/categories/${category}/${item.title}`;
};

export const createLinkFromId = (item: ItemProperties, invetory: Inventory) => {
  const categories = Object.keys(invetory);
  for (const category of categories) {
    const items = invetory[category];
    for (const categoryItem of items) {
      if (item.id === categoryItem.id) {
        return `/categories/${category}/${item.title}`;
      }
    }
  }

  return `/`;
};
