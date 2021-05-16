import React, { useContext, useState } from "react";

const NumberContext = React.createContext<{
  random: number;
  setRandom: (random: number) => void;
}>({
  random: 0,
  setRandom: () => {},
});

export function useNumberContext() {
  return useContext(NumberContext);
}

export function NumberContextProvider({ children }: { children: JSX.Element }) {
  const [random, setRandom] = useState(0);
  return (
    <NumberContext.Provider value={{ random, setRandom }}>
      {children}
    </NumberContext.Provider>
  );
}
