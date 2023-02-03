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
  wrongEditData = "Wrong item values",
  succesfulImageUpload = "Successfully uploaded image",
  unsuccesfulImageUpload = "Failed to upload image",
  succesfulDbAddition = "Successfully added item",
  unsuccesfulDbAddition = "Failed to add item.",
  succesfulItemUpdate = "Successfully edited item",
  unsuccesfulItemUpdate = "Failed to edit item",
  editWithoutChanges = "New item is the same as old item",
  succesfulInitialFetching = "",
  unsuccesfulInitialFetching = "Failed to fetch data",
  unsuccesfulImageFetching = "Failed to fetch image. ",
  succesfulCartAddidtion = "Added items to the cart",
  succesfulDbChange = "Successfully saved changes",
  unsuccesfulDbChange = "Failed to save changes",
}
