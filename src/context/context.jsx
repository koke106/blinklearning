import { createContext, useState, useMemo, useCallback, useContext } from 'react';

const TestContext = createContext();
const initialState = {
  done: false,
  responses: {}
};

export const Context = ({ children }) => {
  const [test, setTest] = useState(initialState);

  const updateTest = useCallback((payload) => {
    setTest(payload);}, []);

  const contextValue = useMemo(
    () => ({
      test,
      updateTest
    }),
    [test, updateTest]
  );

  return (
  <TestContext.Provider value={contextValue}>
    {children}
  </TestContext.Provider>
  )
};

export const useTest = () => useContext(TestContext)