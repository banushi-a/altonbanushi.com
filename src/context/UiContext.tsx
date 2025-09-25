import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UiContextType {
  nightMode: boolean;
  showBlob: boolean;
  toggleNightMode: () => void;
  toggleBlob: () => void;
}

const UiContext = createContext<UiContextType | undefined>(undefined);

interface UiProviderProps {
  children: ReactNode;
}

export const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
  const [nightMode, setNightMode] = useState(true); // Default to dark mode
  const [showBlob, setShowBlob] = useState(true);

  const toggleNightMode = () => setNightMode(!nightMode);
  const toggleBlob = () => setShowBlob(!showBlob);

  const value = {
    nightMode,
    showBlob,
    toggleNightMode,
    toggleBlob,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export const useUi = () => {
  const context = useContext(UiContext);
  if (context === undefined) {
    throw new Error('useUi must be used within a UiProvider');
  }
  return context;
};