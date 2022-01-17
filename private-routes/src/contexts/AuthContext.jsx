import { createContext, useState } from "react";

export const AuthContext = createContext({ token: null, handleToken: () => {} });

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleToken = (restoken) => {
    setToken(restoken);
  };
  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};