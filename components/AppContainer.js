import { React, useState } from "react";
export const AppContext = React.createContext(null);

export default function AppContainer({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        authenticate: setAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
