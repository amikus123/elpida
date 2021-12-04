import { BaseResposne } from "../types";

// * used in contenxt to simulate type, this is nevet called in actual code
export const createPromise = async (): Promise<BaseResposne> => {
  function x() {
    var promise = new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve('doddne!');
      });
    });
    return promise;
 }
  let res:any = await x
  res = res as unknown as Promise<BaseResposne>
  return res
};
