import { useContext } from "react";
import { BasketContext } from "@context";
import { Text, Container } from "./Basket.styled";

const Basket = () => {
  const basketData = useContext(BasketContext);
  console.log("basketData", basketData);

  return (
    <div className="basket">
      {basketData?.map((item) => {
        return (
          <Container key={item?.C}>
            <Text>{item?.OCG[item?.TYPE]?.MBS}</Text>
            <Text>{`Kod: ${item?.C}`}</Text>
            <Text>{`Maç: ${item?.N}`}</Text>
            <Text>{item?.OCG[item?.ocid]?.OC[item?.mid]?.O}</Text>
          </Container>
        );
      })}
    </div>
  );
};

export default Basket;
