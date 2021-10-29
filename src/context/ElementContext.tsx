import { createContext, useState } from "react";

export type ModalOptions = "location" | "none";
export const ElementContext = createContext({
  showOverlay: false,
  selectedModal: "none",
  showDropdown:false,
  setOverlay: (arg: boolean) => {},
  setModal: (arg: ModalOptions) => {},
  openModal: (arg: ModalOptions) => {},
  clearModal: () => {},
  setDropdown: (arg: boolean) => {},
  reset:() => {},
});

export const ElementProvider = ({ children }: { children: any }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedModal, setSelectedModal] = useState<ModalOptions>("none");
  const [showDropdown,setShowDropdown] = useState(false)
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
    setShowOverlay(true)
  };
  const setDropdown=(bool:boolean)=>{
    setShowDropdown(bool)
  }
  const reset = () =>{
    setShowOverlay(false);
    setShowDropdown(false)
    setSelectedModal("none")
  }
  const val = { showOverlay, reset,setDropdown,showDropdown,openModal,setOverlay, selectedModal, setModal, clearModal };
  return (
    <ElementContext.Provider value={{ ...val }}>
      {children}
    </ElementContext.Provider>
  );
};
