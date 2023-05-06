import Todolist from "../Topics/DescribingUI/01/JavaScript in JSX with curly braces/Todolist";
import MainPassingProps from "../Topics/DescribingUI/01/Passingprops/MainPassingprops";
export default function DescribingUI() {
  return (
    <div>
      <>
        {" "}
        <h1 style={{ color: "red" }}>Describing the UI</h1>
        <div>
          <h2>I--JavaScript in JSX with curly braces</h2>
          <hr />
          <div>
            <Todolist></Todolist>
          </div>
        </div>
        <div>
          <h2>I--Passing props to a component</h2>
          <hr />
          <div>
            <MainPassingProps></MainPassingProps>
          </div>
        </div>
      </>
    </div>
  );
}
