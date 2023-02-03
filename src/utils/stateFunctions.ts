import { BaseResposne } from "../constans/types";

//* Generic functions, sets states or displays error based on result of fetching
export function setStateOrDisplayError<TValue>(
  response: BaseResposne & { res: TValue },
  setter: React.Dispatch<React.SetStateAction<TValue>>,
  setSnackbarWithResposne: (resposne: BaseResposne) => void
): boolean {
  if (response.error) {
    setSnackbarWithResposne(response);
    return false;
  } else {
    setter(response.res);
    return true;
  }
}
