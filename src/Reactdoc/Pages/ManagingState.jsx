import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";

//01

import ReactingInputState from "../Topics/ManagingState/01/ReactingInputState/ReactingInputState";
export default function ManagingState() {
  return (
    <div>
      <h1 style={{ color: "red" }}>ManagingState</h1>

      <>
        <CardCollapsed>
          <Collapse
            id="Threeone_01"
            title="ReactingInputState 
          "
            component={<ReactingInputState />}
          />
        </CardCollapsed>
      </>
    </div>
  );
}
