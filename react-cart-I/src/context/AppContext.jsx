import { createContext } from "react";
import { store } from "../Redux/Store";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const { dispatch, getState } = store;
    const value = { dispatch, getState };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};