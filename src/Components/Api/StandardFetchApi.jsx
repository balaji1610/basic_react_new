
import { useState, useEffect } from "react";
export default function StandardFetchApi() {
  const [getError, setError] = useState(false);
  const [getData, setData] = useState([]);
  const standFetchApi = async () => {
    try {
      const Url = await fetch("https://restcountries.com/v2/all");

      if (!Url.ok) throw new Error(Url.status);

      const Fetchdata = await Url.json();
      setData(Fetchdata);
      console.log(Fetchdata);
    } catch (err) {
      setError(!getError);

      console.error(err);
    }
  };
  useEffect(() => {
    standFetchApi();
  }, []);

  return (
    <div className="App">
      {getError ? "Oops Something Wrong" : null}

      {getData.map((el) => {
        const name = el.name;

        const flag = el.flag;

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
