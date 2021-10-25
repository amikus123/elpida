import { createContext, useState } from "react";

export const OverlayContext = createContext({
  showOverlay: false,
  setOverlay: (arg: boolean) => {},
});

export const OverlayProvider = ({ children }: { children: any }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const setOverlay = (bool: boolean) => {
    setShowOverlay(bool);
  };
  const val = { showOverlay, setOverlay };
  return (
    <OverlayContext.Provider value={{ ...val }}>
      {children}
    </OverlayContext.Provider>
  );
};
