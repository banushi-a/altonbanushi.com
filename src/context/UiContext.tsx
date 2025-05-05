import React, { createContext, useState, useContext, ReactNode } from "react";

type UiContextType = {
  nightMode: boolean;
  toggleShowBlob: () => void;
  showBlob: boolean;
  toggleNightMode: () => void;
};

const UiContext = createContext<UiContextType | undefined>(undefined);

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [nightMode, setNightMode] = useState(false);
  const [showBlob, setShowBlob] = useState(true);

  const toggleShowBlob = () => {
    setShowBlob((old) => !old);
  };

  const toggleNightMode = () => {
    setNightMode((old) => !old);
  };

  return (
    <UiContext.Provider
      value={{ nightMode, toggleShowBlob, showBlob, toggleNightMode }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUi = (): UiContextType => {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be inside UiProvider");
  return ctx;
};
