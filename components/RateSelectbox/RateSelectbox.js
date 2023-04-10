import { useContext } from "react";
import { RateDispatchContext, RateContext } from "../../context";

const rateArray = ["10", "20", "30", "40", "50"];
const RateSelectbox = ({ rate }) => {
  const setRate = useContext(RateDispatchContext) || (() => {});

  const onChange = (e) => {
    setRate(e.target.value);
  };

  return (
    <>
      <select value={rate} onChange={onChange}>
        {rateArray.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default RateSelectbox;
