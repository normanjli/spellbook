import React, { useState } from "react";

export const CharacterContext = React.createContext<
  CharContext | null | undefined
>(null);

interface CharacterContextProviderProps {}

const CharacterContextProvider: React.FC<CharacterContextProviderProps> = ({
  children,
}) => {
  const [charFocus, setCharFocus] = useState<CharObj | undefined>(undefined);
  const updateCharFocus = (className: string, index: number, id: number) => {
    setCharFocus({ className: className, index: index, id: id });
  };
  return (
    <CharacterContext.Provider
      value={{ character: charFocus, updateCharFocus }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
export default CharacterContextProvider;
