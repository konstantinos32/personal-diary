import {createContext, useContext} from 'react';

export const EntriesContext= createContext();

export const useEntriesContext = () => {
    return useContext(EntriesContext);
};