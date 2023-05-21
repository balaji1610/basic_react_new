import { useState } from "react";
import ConsaddButton from "../AddingArray/Consaddinput/ConsaddButton";

export default function ReplaceingArray() {
  const [addvalue, setAddvalue] = useState([0, 0, 0]);

  const handleOneEvent = (argument) => {
    const counters = addvalue.map((elm, index) => {
      return index == argument ? elm + 1 : elm;
    });

    setAddvalue(counters);
  };

  return (
    <div>
      <ul>
        {addvalue.map((value, i) => {
          return (
            <li key={i}>
              {value}
              <ConsaddButton label="+1" onClick={() => handleOneEvent(i)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
