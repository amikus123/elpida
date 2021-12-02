import { BaseResposne } from "../firebase/consts";

// used in contenxt to simulate type, this is nevet called
export const createPromise = async (): Promise<BaseResposne> => {
  const xd : BaseResposne = { text: "", error: false }
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
