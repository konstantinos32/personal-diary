import { createContext, useContext } from 'react';

const EntriesContext = createContext();

const useEntries = () => {
  return useContext(EntriesContext);
};

export { EntriesContext, useEntries };