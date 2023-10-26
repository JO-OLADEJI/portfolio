import React, { ReactNode, createContext, useState } from "react";

interface GlobalContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
