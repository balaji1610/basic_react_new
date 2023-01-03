import { useState } from "react";
import Red from "./UseFiles/RED";
import BLUE from "./UseFiles/Blue";
export default function MangeTwoComponent() {
  const [compManage, setCompManage] = useState(null);
  const [hidden, setHidden] = useState(false);

  const Button01 = (el) => {
    // let Data = el;
    // let emptyobject = {
    //   componentName: Data
    // };
    // console.log(emptyobject.componentName, "Object");
    setHidden(true);
    return el === "RED"
      ? setCompManage(!compManage)
      : setCompManage(!compManage);
  };

  return (
    <div className="App">
      <button onClick={() => Button01("RED")}>RED</button>
      <br /> <br />
      <button onClick={() => Button01("Blue")}>BLUE</button>
      {hidden ? <div> {compManage ? <Red /> : <BLUE />}</div> : null}
    </div>
  );
}
