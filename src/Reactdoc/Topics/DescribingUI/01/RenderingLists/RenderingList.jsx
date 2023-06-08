import { People } from "./ConsRenderingList/Data";
import Getimage from "./ConsRenderingList/Getimage";
export default function RenderingList() {
  const peopleList = People.map((person) => {
    return (
      <>
        <ul key={person.id}>
          <img className="avater" src={Getimage(person)} alt={person.name} />

          <p>
            <b>{person.name}</b>
            {" " + person.profession + " "}
            Known For {person.accomplishment}
          </p>
        </ul>
      </>
    );
  });

  return (
    <div>
      <article>
        <h1>Scientists</h1>
        {peopleList}
      </article>
    </div>
  );
}
