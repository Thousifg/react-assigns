import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(); // type

export const AuthContextProvider = ({ children }) => {
  //context provider
  const [isAuth, setIsAuth] = useState(false);

  const [token, setToken] = useState(null);

  const toggleAuth = (token) => {
    if (token) {
      setIsAuth(!isAuth);
      setToken(token);
    }
  };
  return (
    <AuthContext.Provider value={{ isAuth, token, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};