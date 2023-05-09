import Panel from "./Panel";
import ProfileHeader from "./ProfileHeader";
import ImageAvater from "./Imageavater";

export default function CardProfile({ person }) {
  return (
    <div>
      <Panel>
        <ProfileHeader person={person} />
        <ImageAvater person={person} />
      </Panel>
    </div>
  );
}
