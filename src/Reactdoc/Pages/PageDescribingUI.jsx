import Todolist from "../Topics/DescribingUI/01/JavaScript in JSX with curly braces/Todolist";
import MainPassingProps from "../Topics/DescribingUI/01/Passingprops/MainPassingprops";
import Collapse from "./Accordition/Collapsed";
import CardCollapsed from "./Accordition/CardCollapsed";
import ConditionalRendering from "../Topics/DescribingUI/01/ConditionAlRendering/CondtionalRendering";
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
          </CardCollapsed>
        </>
      </>
    </div>
  );
}
