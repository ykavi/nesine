import { useContext } from "react";
import { BasketContext } from "../../context";
import { Text, Container, Wrapper, TextGroup } from "./Basket.styled";

const Basket = () => {
  const basketData = useContext(BasketContext);
  let total = 0;

  return (
    <Wrapper data-testId="basket">
      {basketData?.map((item) => {
        const rate = item?.OCG[item?.ocid]?.OC[item?.mid]?.O;
        total += 1 * rate;

        return (
          <Container data-testId={`basket-${item?.C}`} key={item?.C}>
            <TextGroup>
              <Text>{item?.OCG[item?.TYPE]?.MBS}</Text>
              <Text>{`Kod: ${item?.C}`}</Text>
              <Text>{`Maç: ${item?.N}`}</Text>
            </TextGroup>
            <b>{rate}</b>
          </Container>
        );
      })}

      <Text data-testId="total-amount">Toplam Tutar: {total?.toFixed(2)}</Text>
    </Wrapper>
  );
};

export default Basket;
