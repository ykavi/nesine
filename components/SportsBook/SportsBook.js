import { Fragment, useContext, useRef, useState, useEffect } from "react";
import { BasketDispatchContext, BasketContext } from "../../context";
import { Col, Row } from "react-styled-flexboxgrid";
import { useOnScreen } from "../../hooks";

import Thead from "./Thead";
import { Table, Tr, Td } from "./SportsBook.styled";

const SportsBook = ({ data }) => {
  const [page, setPage] = useState(50);
  const basketData = useContext(BasketContext);
  const setBasketData = useContext(BasketDispatchContext) || (() => {});
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    if (isOnScreen) setPage((prev) => prev + 10);
  }, [isOnScreen]);

  const onClickHandler = (e, item) => {
    const { dataset } = e.target;
    if (!dataset?.mid || !dataset?.ocid) return;

    setBasketData((prev) => {
      const index = prev.findIndex((p) => p?.C === item?.C);

      if (index > -1) {
        const removedData = prev.filter((p) => p.C !== item?.C);
        if (
          prev[index]?.mid !== dataset?.mid ||
          prev[index]?.ocid !== dataset?.ocid
        ) {
          return [...removedData, { ...item, ...dataset }];
        }
        return [...removedData];
      }
      return [...prev, { ...item, ...dataset }];
    });
  };

  const Tbody = () => {
    return (
      <tbody>
        {[...data?.slice(0, page)]?.map((item, i) => {
          const { C, ocid, mid } =
            basketData?.find((b) => b?.C === item?.C) || {};

          return (
            <Fragment key={item?.C}>
              <tr>
                <td>{`${item?.D} ${item?.LN}`}</td>
                <td>Yorumlar</td>
                <td>{item?.OCG[item?.TYPE]?.MBS}</td>
                <td>{item?.OCG["1"]?.OC["0"]?.N}</td>
                <td>{item?.OCG["1"]?.OC["1"]?.N}</td>
                <td>{item?.OCG["1"]?.OC["2"]?.N}</td>
                <td>{item?.OCG["5"]?.OC["25"]?.N}</td>
                <td>{item?.OCG["5"]?.OC["26"]?.N}</td>
                <td>H1</td>
                <td>1</td>
                <td>x</td>
                <td>2</td>
                <td>H2</td>
                <td>{item?.OCG["2"]?.OC["3"]?.N}</td>
                <td>{item?.OCG["2"]?.OC["4"]?.N}</td>
                <td>{item?.OCG["2"]?.OC["5"]?.N}</td>
                <td>VAR</td>
                <td>YOK</td>
                <td>+99</td>
              </tr>

              <Tr onClick={(e) => onClickHandler(e, item)}>
                <Td />
                <Td />
                <Td />
                <Td
                  data-testId={`${item?.C}-1-0`}
                  isSelected={C === item?.C && ocid === "1" && mid === "0"}
                  data-ocid="1"
                  data-mid="0"
                >
                  {item?.OCG["1"]?.OC["0"]?.O}
                </Td>

                <Td
                  isSelected={C === item?.C && ocid === "1" && mid === "1"}
                  data-ocid="1"
                  data-mid="1"
                >
                  {item?.OCG["1"]?.OC["1"]?.O}
                </Td>

                <Td />
                <Td
                  isSelected={C === item?.C && ocid === "5" && mid === "25"}
                  data-ocid="5"
                  data-mid="25"
                >
                  {item?.OCG["5"]?.OC["25"]?.O}
                </Td>
                <Td
                  isSelected={C === item?.C && ocid === "5" && mid === "26"}
                  data-ocid="5"
                  data-mid="26"
                >
                  {item?.OCG["5"]?.OC["26"]?.O}
                </Td>
                <Td />
                <Td />
                <Td />
                <Td />
                <Td />
                <Td
                  isSelected={C === item?.C && ocid === "2" && mid === "3"}
                  data-ocid="2"
                  data-mid="3"
                >
                  {item?.OCG["2"]?.OC["3"]?.O}
                </Td>
                <Td
                  isSelected={C === item?.C && ocid === "2" && mid === "4"}
                  data-ocid="2"
                  data-mid="4"
                >
                  {item?.OCG["2"]?.OC["4"]?.O}
                </Td>
                <Td
                  isSelected={C === item?.C && ocid === "2" && mid === "5"}
                  data-ocid="2"
                  data-mid="5"
                >
                  {item?.OCG["2"]?.OC["5"]?.O}
                </Td>
                <Td />
                <Td />
                <Td>{Object.keys(item?.OCG)?.length}</Td>
              </Tr>
            </Fragment>
          );
        })}
      </tbody>
    );
  };

  return (
    <Row>
      <Col>
        <Table>
          <Thead eventCount={data?.length} />
          <Tbody />
        </Table>
        <div ref={elementRef}>Loading...</div>
      </Col>
    </Row>
  );
};

export default SportsBook;
