import Todolist from "../Topics/DescribingUI/01/JavaScript in JSX with curly braces/Todolist";
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
      </>
    </div>
  );
}
