import List from "./ConsConditionRendering/list";
export default function ConditionalRendering2d() {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <ul>
        <List ispakced={true} title="API Testing" />
        <List ispakced={false} title="Post Request" />
        <List ispakced={true} title="Create Component" />
      </ul>
    </div>
  );
}
