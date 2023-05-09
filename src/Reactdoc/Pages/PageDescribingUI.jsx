import Todolist from "../Topics/DescribingUI/01/JavaScript in JSX with curly braces/Todolist";
import MainPassingProps from "../Topics/DescribingUI/01/Passingprops/MainPassingprops";
import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";
import ConditionalRendering from "../Topics/DescribingUI/01/ConditionAlRendering/CondtionalRendering";

import RenderingList from "../Topics/DescribingUI/01/RenderingLists/RenderingList";

//06

import PropsTime from "../Topics/DescribingUI/06/HowPropsOverTime/PropsTime";

//07
import ConditionalRendering2d from "../Topics/DescribingUI/07/ConditionalRendering/CondtionalRendering";
export default function DescribingUI() {
  return (
    <div>
      <>
        {" "}
        <h1 style={{ color: "red" }}>Describing the UI</h1>
        <>
          <CardCollapsed>
            <Collapse
              id="Two"
              title="I--JavaScript in JSX with curly braces"
              component={<Todolist />}
            />
            <Collapse
              id="Three"
              title="I--Passing props to a component"
              component={<MainPassingProps />}
            />
            <Collapse
              id="Four"
              title="Conditional rendering "
              component={<ConditionalRendering />}
            />
            <Collapse
              id="Five"
              title="RenderingList "
              component={<RenderingList />}
            />
          </CardCollapsed>
        </>
        <>
          <h1>06</h1>
          <CardCollapsed>
            <Collapse
              id="Six"
              title="How props change over time  "
              component={<PropsTime />}
            />
          </CardCollapsed>
        </>
        <>
          <h1>07</h1>
          <CardCollapsed>
            <Collapse
              id="Seven"
              title="Conditional Rendering"
              component={<ConditionalRendering2d />}
            />
          </CardCollapsed>
        </>
        <br /> <br /> <br />
      </>
    </div>
  );
}
