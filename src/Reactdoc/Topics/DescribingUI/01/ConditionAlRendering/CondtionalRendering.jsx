import ConsConditional from "./ContainerConditional/ConsConditional";

export default function ConditionalRendering() {
  return (
    <div>
      <section>
        <h1>Todo List</h1>
        <ul>
          <ConsConditional isPacked={true} name="API Testing" />
          <ConsConditional isPacked={false} name="Make Form UI" />
          <ConsConditional isPacked={true} name="Post Request" />
        </ul>
      </section>
    </div>
  );
}
