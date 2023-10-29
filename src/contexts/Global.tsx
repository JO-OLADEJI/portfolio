import React, { ReactNode, createContext, Dispatch, useReducer } from "react";

interface GlobalState {
  isMenuOpen: boolean;
  isMusicPlaying: boolean;
}

interface GlobalAction {
  type: "TOGGLE_MENU" | "TOGGLE_PLAYBACK";
}

interface GlobalContextType {
  state: GlobalState;
  dispatch: Dispatch<GlobalAction>;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

const globalReducer = (
  state: GlobalState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case "TOGGLE_PLAYBACK":
      return { ...state, isMusicPlaying: !state.isMusicPlaying };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(globalReducer, {
    isMenuOpen: false,
    isMusicPlaying: false,
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
