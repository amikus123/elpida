import { BaseFirestoreResposne } from "../types";

//* Generic functions, sets states or displays error based on result of fetching
export function setStateOrDisplayError<TValue>(
  response: BaseFirestoreResposne & { res: TValue },
  setter: React.Dispatch<React.SetStateAction<TValue>>,
  setSnackbarWithResposne:(resposne: BaseFirestoreResposne) => void
): boolean {
  if (response.error) {
    setSnackbarWithResposne(response);
    return false;
  } else {
    setter(response.res);
    return true;
  }
}