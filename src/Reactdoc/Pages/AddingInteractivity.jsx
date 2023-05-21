import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";

//01
import StateMemory from "../Topics/Adding Interactivity/01/StateMemory/StateMemory";

import Stateassnapshot from "../Topics/Adding Interactivity/01/StateasaSnaphot/Stateassnaphot";

import Counterder from "../Topics/Adding Interactivity/01/QueingStateupdate/Counterder";

import ObjectState from "../Topics/Adding Interactivity/01/UpdatingObjectsinState/ObjectState";

//02

import RespondingEvents from "../Topics/Adding Interactivity/02/RespondingEvents";

//07

import CopyObjects from "../Topics/Adding Interactivity/07/Copyingobjects/CopyObjects";

import UsingSigleEventHandler from "../Topics/Adding Interactivity/07/UsingSigleEventHandler/UsingSigleEventHandler";

import UpdatingNesedObject from "../Topics/Adding Interactivity/07/UpdatingNesedObject/UpdatingNesedObject";

//8
import AddingArray from "../Topics/Adding Interactivity/08/AddingArray/AddingArray";
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
      </div>

      <div>
        <h1>Copying objects with the spread syntax</h1>
        <h1>07</h1>
        <CardCollapsed>
          <Collapse
            id="TwoSeven_01"
            title="Copying objects with the spread syntax"
            component={<CopyObjects />}
          />
        </CardCollapsed>
        <CardCollapsed>
          <Collapse
            id="TwoSeven_02"
            title="Using a single event handler for multiple fields"
            component={<UsingSigleEventHandler />}
          />
        </CardCollapsed>
        <CardCollapsed>
          <Collapse
            id="TwoSeven_03"
            title="Updating a nested object"
            component={<UpdatingNesedObject />}
          />
        </CardCollapsed>
      </div>

      <div>
        {" "}
        <h1>Updating Arrays in State</h1>
        <h1>08</h1>
        <CardCollapsed>
          <Collapse
            id="TwoEight_01"
            title="Adding to an array 
            "
            component={<AddingArray />}
          />
        </CardCollapsed>
        <br />
        <br />
      </div>
    </div>
  );
}
