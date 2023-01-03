import { useState } from "react";
import Red from "./UseFiles/RED";
import Blue from "./UseFiles/Blue";
export default function MangeMulitpleComponents() {
  const [current, setCurrent] = useState("A");
  return (
    <div>
      <button onClick={() => setCurrent("A")}>A</button>
      <br /> <br />
      <button onClick={() => setCurrent("RED")}>RED</button>
      <br /> <br />
      <button onClick={() => setCurrent("BLUE")}>BLUE</button>
      {
        {
          A: <div>A</div>,
          RED: (
            <div>
              <Red />
            </div>
          ),
          BLUE: (
            <div>
              <Blue />
            </div>
          ),
        }[current]
      }
    </div>
  );
}
