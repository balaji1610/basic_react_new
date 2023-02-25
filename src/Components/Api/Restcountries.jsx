import { useState, useEffect } from "react";
export default function App() {
  const [getData, setData] = useState([]);

  const [click, Notclick] = useState(true);

  const fetchPeru = () => {
    fetch("https://restcountries.com/v2/name/peru")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  };

  const fetchApi = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  };

  const ClickEvent = (el) => {
    Notclick(false);
    return fetchApi(el);
  };
  return (
    <div className="App">
      {click ? fetchPeru() : null}
      <button onClick={() => ClickEvent("India")}>India </button>
      &nbsp; &nbsp;
      <button onClick={() => ClickEvent("Us")}> USA </button>
      {getData.map((item) => {
        const name = item.name;

        const flag = item.flag;

        return (
          <div>
            <h1>{name}</h1>
            <img src={flag} alt={name} width="250" height="100" />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
