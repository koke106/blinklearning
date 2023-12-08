import { createContext, useState } from "react";
export const TestContext = createContext({done:false});

export default function Context({ children }) {
    const [done, setDone] = useState();
  
    return (
      <TestContext.Provider value={{ done, setDone }}>
        {children}
      </TestContext.Provider>
    );
}