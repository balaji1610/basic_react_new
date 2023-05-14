import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";

//01
import StateMemory from "../Topics/Adding Interactivity/01/StateMemory/StateMemory";

import Stateassnapshot from "../Topics/Adding Interactivity/01/StateasaSnaphot/Stateassnaphot";

import Counterder from "../Topics/Adding Interactivity/01/QueingStateupdate/Counterder";

import ObjectState from "../Topics/Adding Interactivity/01/UpdatingObjectsinState/ObjectState";

//02

import RespondingEvents from "../Topics/Adding Interactivity/02/RespondingEvents";
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
      <CardCollapsed>
        <Collapse
          id="Twoone_03"
          title="Queueing a series of state updates 
 
          "
          component={<Counterder />}
        />
      </CardCollapsed>
      <CardCollapsed>
        <Collapse
          id="Twoone_04"
          title="Updating objects in state "
          component={<ObjectState />}
        />
      </CardCollapsed>

      <div>
        <h1>Responding to Events</h1>
        <h1>02</h1>
        <CardCollapsed>
          <Collapse
            id="TwoTwo_01"
            title="Fix an event handler
            "
            component={<RespondingEvents />}
          />
        </CardCollapsed>
        <br />
        <br />
      </div>
    </div>
  );
}
