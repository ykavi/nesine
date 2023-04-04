import { useContext } from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import { BasketDispatchContext } from "@context";

const Home = ({ data }) => {
  const setBasketData = useContext(BasketDispatchContext);

  return (
    <Row>
      <Col>
        <table>
          <thead>
            <tr>
              <th>Event Count: {data?.length}</th>
              <th>Yorumlar</th>
              <th></th>
              <th>1</th>
              <th>x</th>
              <th>2</th>
              <th>Alt</th>
              <th>Üst</th>
              <th>H1</th>
              <th>1</th>
              <th>X</th>
              <th>2</th>
              <th>H2</th>
              <th>1-X</th>
              <th>1-2</th>
              <th>X-2</th>
              <th>VAR</th>
              <th>YOK</th>
              <th>+99</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
                  <tr key={"row" + index}>
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
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td onClick={() => setBasketData(item)}>
                      {item?.OCG["1"]?.OC["0"]?.O}
                    </td>
                    <td>{item?.OCG["1"]?.OC["1"]?.O}</td>
                    <td />
                    <td>{item?.OCG["5"]?.OC["25"]?.O}</td>
                    <td>{item?.OCG["5"]?.OC["26"]?.O}</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>{item?.OCG["2"]?.OC["3"]?.O}</td>
                    <td>{item?.OCG["2"]?.OC["4"]?.O}</td>
                    <td>{item?.OCG["2"]?.OC["5"]?.O}</td>
                    <td />
                    <td />
                    <td>{Object.keys(item?.OCG)?.length}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://nesine-case-study.onrender.com/bets`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
