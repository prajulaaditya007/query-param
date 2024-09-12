import { createContext, useState, ReactNode } from "react";

interface AppContextType {
  contextId: string | null;
  setContextId: (id: string) => void;
}

export const AppContext = createContext<AppContextType>({
  contextId: null,
  setContextId: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [contextId, setContextId] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ contextId, setContextId }}>
      {children}
    </AppContext.Provider>
  );
};
