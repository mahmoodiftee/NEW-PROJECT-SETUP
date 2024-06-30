import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [check, setCheck] = useState()

  const providerInfo = {
    check,
    setCheck
  };

  return (
    <AuthContext.Provider value={providerInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;