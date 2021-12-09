import { createContext, useEffect, useState } from "react";
import {
  PossibleModalColor,
  POSSIBLE_MODAL_COLORS,
  SnackbarType,
} from "../constans/snackbar";
import { BaseResposne } from "../constans/types";

export type ModalOptions = "location" | "none";
const placeholderSnackbarValues: SnackbarType = {
  show: false,
  color: "red",
  text: "",
  prevTimeoutId: null,
};
export const ElementContext = createContext({
  showOverlay: false,
  selectedModal: "none",
  showDropdown: false,
  snackbarValue: placeholderSnackbarValues,
  updateSnackbar: (text: string, color: PossibleModalColor = "green") => {},
  setOverlay: (arg: boolean) => {},
  setModal: (arg: ModalOptions) => {},
  openModal: (arg: ModalOptions) => {},
  clearModal: () => {},
  setDropdown: (arg: boolean) => {},
  reset: () => {},
  setSnackbarWithResposne: (resposne: BaseResposne) => {}
});

export const ElementProvider = ({ children }: { children: any }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedModal, setSelectedModal] = useState<ModalOptions>("none");
  const [showDropdown, setShowDropdown] = useState(false);

  const [snackbarValue, setSnackbarValue] = useState<SnackbarType>({
    show: false,
    color: "red",
    text: "",
    prevTimeoutId: null,
  });

  const updateSnackbar = (
    text: string,
    color: keyof typeof POSSIBLE_MODAL_COLORS = "green"
  ) => {
    // if there is no previous timeout, we set it
    // else we remove it and then set it
    if (snackbarValue.prevTimeoutId !== null) {
      clearTimeout(snackbarValue.prevTimeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      setSnackbarValue({ ...snackbarValue, show: false, prevTimeoutId: null });
    }, 5000);
    setSnackbarValue({ color, text, show: true, prevTimeoutId: newTimeoutId });
  };

  const setSnackbarWithResposne = (resposne: BaseResposne) => {
    const { text, error } = resposne;
    const color = error?"red":"green"
  
    updateSnackbar(text, color);
  };
  useEffect(() => {
    if (selectedModal === "none") {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.overflowY = "scroll";
    }
  }, [selectedModal]);

  const setOverlay = (bool: boolean) => {
    setShowOverlay(bool);
  };
  const setModal = (modalVariant: ModalOptions) => {
    setSelectedModal(modalVariant);
  };
  const clearModal = () => {
    setSelectedModal("none");
    setShowOverlay(false);
  };
  const openModal = (modalVariant: ModalOptions) => {
    setSelectedModal(modalVariant);
    setShowOverlay(true);
  };
  const setDropdown = (bool: boolean) => {
    setShowDropdown(bool);
  };
  const reset = () => {
    setShowOverlay(false);
    setShowDropdown(false);
    setSelectedModal("none");
  };
  const val = {
    showOverlay,
    reset,
    setDropdown,
    showDropdown,
    openModal,
    setOverlay,
    selectedModal,
    setModal,
    clearModal,
    snackbarValue,
    updateSnackbar,
    setSnackbarWithResposne
  };
  return (
    <ElementContext.Provider value={{ ...val }}>
      {children}
    </ElementContext.Provider>
  );
};
