import { useContext } from "react";
import { BasketContext } from "@context";
import { Text, Container } from "./Basket.styled";

const Basket = () => {
  const basketData = useContext(BasketContext);
  console.log("basketData", basketData);
  let total = 0;

  return (
    <div className="basket">
      {basketData?.map((item) => {
        const rate = item?.OCG[item?.ocid]?.OC[item?.mid]?.O;
        total += 1 * rate;
        return (
          <Container key={item?.C}>
            <Text>{item?.OCG[item?.TYPE]?.MBS}</Text>
            <Text>{`Kod: ${item?.C}`}</Text>
            <Text>{`Maç: ${item?.N}`}</Text>
            <Text>{rate}</Text>
          </Container>
        );
      })}
      <Text>Toplam Tutar: {total}</Text>
    </div>
  );
};

export default Basket;
