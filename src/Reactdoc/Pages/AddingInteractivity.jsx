import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";

//01
import StateMemory from "../Topics/Adding Interactivity/01/StateMemory/StateMemory";

import Stateassnapshot from "../Topics/Adding Interactivity/01/StateasaSnaphot/Stateassnaphot";

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
      <CardCollapsed>
        <Collapse
          id="Twoone_02"
          title="State as a snapshot 
          "
          component={<Stateassnapshot />}
        />
      </CardCollapsed>
      <br /> <br />
    </div>
  );
}
