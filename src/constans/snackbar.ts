
export type PossibleModalColor = keyof typeof POSSIBLE_MODAL_COLORS;
export enum POSSIBLE_MODAL_COLORS {
  green = "#189306",
  red = "#930606",
}

export interface SnackbarType {
  show: boolean;
  color: PossibleModalColor;
  text: string;
  prevTimeoutId: ReturnType<typeof setTimeout> | null;
}

export enum SnackbarTexts {
  wrongEditData = "Złe dane w edytowanym przedmiocie",
  succesfulImageUpload = "Udało się przesłać zdjęcie",
  unsuccesfulImageUpload = "Nie dało się przesłać zdjęcia: ",
  succesfulDbAddition = "Dodano przedmiot do bazy i przesłano zdjęcia",
  unsuccesfulDbAddition = "Nie dodano przedmiotu do bazy: ",
  succesfulItemUpdate = "Edytowano przedmiot w bazie",
  unsuccesfulItemUpdate = "Nie udało sie edytować przedmiotu w bazie: ",
  editWithoutChanges = "Nowe dane są takie same jak stare",
  succesfulInitialFetching = "",
  unsuccesfulInitialFetching = "Nie udało się pobrać danych z bazy: ",
  unsuccesfulImageFetching="Nie udało się pobrać zdjęcia z bazy: "
}
