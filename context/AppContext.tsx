"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface PortfolioState {
  NavBar: {
    IntervalEvent: null;
    scrolling: null;
    scrollSizeY: null;
  };
  Scrolling: {
    IntervalEvent: null;
  };
}

interface TypingState {
  keyboardEvent: null;
  eventInputLostFocus: null;
}

interface AppState {
  portfolio: PortfolioState;
  typing: TypingState;
  finishedLoading: boolean;
}

interface AppContextProps {
  sharedState: AppState;
  setSharedState: Dispatch<SetStateAction<AppState>>;
}

const AppContext = createContext<AppContextProps | null>(null);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sharedState, setSharedState] = useState<AppState>({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
