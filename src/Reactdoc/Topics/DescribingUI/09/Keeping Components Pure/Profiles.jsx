import CardProfile from "./ConsProfile/CardProfile";
import { list } from "./ConsProfile/List";
export default function Profiles() {
  const [one, two] = list;

  return (
    <div>
      <CardProfile person={one} />
      <CardProfile person={two} />
    </div>
  );
}
