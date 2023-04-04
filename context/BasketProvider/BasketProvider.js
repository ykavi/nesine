import React, { createContext, useState } from "react";

const BasketContext = createContext(undefined);
const BasketDispatchContext = createContext(undefined);

const BasketProvider = ({ children }) => {
  const [basketData, setBasketData] = useState(undefined);

  return (
    <BasketContext.Provider value={basketData}>
      <BasketDispatchContext.Provider value={setBasketData}>
        {children}
      </BasketDispatchContext.Provider>
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext, BasketDispatchContext };
