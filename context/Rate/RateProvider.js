import React, { createContext, useState } from "react";

const RateContext = createContext(undefined);
const RateDispatchContext = createContext(undefined);

const RateProvider = ({ children }) => {
  const [rate, setRate] = useState("10");

  return (
    <RateContext.Provider value={rate}>
      <RateDispatchContext.Provider value={setRate}>
        {children}
      </RateDispatchContext.Provider>
    </RateContext.Provider>
  );
};

export { RateContext, RateDispatchContext, RateProvider };
