import { useState } from "react";
import BnsComp from "./BnsComp";

export default function Counterder() {
  const [count, setCount] = useState(0);

  const handleOneIncrement = () => {
    return setCount(count + 1);
  };

  const handleThreeIncrement = () => {
    return setCount(count + 3);
  };
  return (
    <div>
      <BnsComp
        className={"btn_red "}
        lable={"+1"}
        onClick={handleOneIncrement}
      />
      <br />
      <h1>{count}</h1>
      <br />
      <BnsComp
        className={"btn_red "}
        lable={"+3"}
        onClick={handleThreeIncrement}
      />
    </div>
  );
}
