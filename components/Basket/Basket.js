import { useContext } from "react";
import { BasketContext } from "@context";

const Basket = () => {
  const basketData = useContext(BasketContext);
  return (
    <div className="basket">
      <h1>{JSON.stringify(basketData)}</h1>
    </div>
  );
};

export default Basket;
