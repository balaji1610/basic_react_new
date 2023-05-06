import Card from "./ContainersProps/Card";
import Avater from "./ContainersProps/Avater";
export default function MainPassingProps() {
  return (
    <div>
      <Card>
        {" "}
        <Avater
          Data="hellobalaji"
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
      </Card>
    </div>
  );
}
