import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";

import StateMemory from "../Topics/Adding Interactivity/01/StateMemory/StateMemory";

export default function AddingInteractivity() {
  return (
    <div>
      <h1>AddingInteractivity</h1>
      <h1>01</h1>
      <CardCollapsed>
        <Collapse
          id="Twoone_01"
          title="State: a component’s memory 
          "
          component={<StateMemory />}
        />
      </CardCollapsed>
      <br /> <br />
    </div>
  );
}
