import { Fragment, useContext } from "react";
import { BasketDispatchContext } from "@context";
import { Col, Row } from "react-styled-flexboxgrid";

import Thead from "./Thead";
import { Table } from "./SportsBook.styled";

const SportsBook = ({ data }) => {
  const setBasketData = useContext(BasketDispatchContext) || (() => {});

  const onClickHandler = (dataset, item) => {
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
        {data?.map((item) => {
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

              <tr onClick={(e) => onClickHandler(e.target?.dataset, item)}>
                <td />
                <td />
                <td />
                <td data-ocid="1" data-mid="0">
                  {item?.OCG["1"]?.OC["0"]?.O}
                </td>

                <td data-ocid="1" data-mid="1">
                  {item?.OCG["1"]?.OC["1"]?.O}
                </td>

                <td />
                <td data-ocid="5" data-mid="25">
                  {item?.OCG["5"]?.OC["25"]?.O}
                </td>
                <td data-ocid="5" data-mid="26">
                  {item?.OCG["5"]?.OC["26"]?.O}
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td data-ocid="2" data-mid="3">
                  {item?.OCG["2"]?.OC["3"]?.O}
                </td>
                <td data-ocid="2" data-mid="4">
                  {item?.OCG["2"]?.OC["4"]?.O}
                </td>
                <td data-ocid="2" data-mid="5">
                  {item?.OCG["2"]?.OC["5"]?.O}
                </td>
                <td />
                <td />
                <td>{Object.keys(item?.OCG)?.length}</td>
              </tr>
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
      </Col>
    </Row>
  );
};

export default SportsBook;
