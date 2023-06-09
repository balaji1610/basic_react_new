import BoxTopic from "../Topices/LayoutTopic/BoxTopic";
import ContainerTopic from "../Topices/LayoutTopic/ContainerTopic";
import GridTopic from "../Topices/LayoutTopic/GridTopic";
export default function Layout() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>BOX</h1>
      <BoxTopic />
      <h1 style={{ textAlign: "center" }}>Container</h1>
      <ContainerTopic />
      <h1 style={{ textAlign: "center" }}>Grid</h1>
      <GridTopic />
    </div>
  );
}
