import { useState } from "react";
export default function ObjectState() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const name = person.name;

  const { title, city, image } = person.artwork;

  const Allclickchange = {
    handleNamechange: (e) => {
      setPerson({ ...person, name: e.target.value });
    },
    handleTitleChange: (e) => {
      setPerson({
        ...person,
        artwork: { ...person.artwork, title: e.target.value },
      });
    },
    handleCityChange: (e) => {
      setPerson({
        ...person,
        artwork: { ...person.artwork, city: e.target.value },
      });
    },
    handleImageChange: (e) => {
      setPerson({
        ...person,
        artwork: { ...person.artwork, image: e.target.value },
      });
    },
  };

  const {
    handleNamechange,
    handleTitleChange,
    handleCityChange,
    handleImageChange,
  } = Allclickchange;
  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNamechange} />
      </label>
      <br /> <br />
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br /> <br />
      <label>
        City:
        <input type="text" value={city} onChange={handleCityChange} />
      </label>
      <br /> <br />
      <label>
        Image:
        <input type="text" value={image} onChange={handleImageChange} />
      </label>
      <hr />
      <section>
        <b>Name:</b>
        {person.name}
        <br />
        <b>Title:</b>
        {person.artwork.title}
        <br />
        <b>City:</b>
        {person.artwork.city}
        <br />

        <img src={person.artwork.image} alt={person.name} />
      </section>
    </div>
  );
}
