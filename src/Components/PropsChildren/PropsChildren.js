import Parent from "./Parent";
import Children from "./Children";

function PropsChildren() {
  return (
    <Parent>
      <Children name="facebook"></Children>
      <Children name="whatsapp"></Children>
    </Parent>
  );
}

export default PropsChildren;
