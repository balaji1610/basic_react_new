import { useEffect, useState } from "react";

export default function Endpoint() {
  const [getdata, setdata] = useState([]);
  const [balaji, setbalaji] = useState([]);
  const [handledata, sethandledata] = useState(true);

  const fetchapi = async () => {
    try {
      const Url = await fetch("https://jsonplaceholder.typicode.com/comments");

      if (!Url.ok) throw new Error("Oops");

      const result = await Url.json();
      setdata(result);
    } catch (err) {
      console.error(err);
    }
  };

  const sec = async (el) => {
    try {
      const Urld = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${el}`
      );

      if (!Urld.ok) throw new Error("Oops");

      const resultd = await Urld.json();
      console.log("balaji");
      setbalaji(resultd);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const ClickEvent = (el) => {
    setTimeout(() => {
      sec(el);
    }, 1000);
    setTimeout(() => {
      sethandledata(!handledata);
    }, 3000);
  };

  return (
    <div className="App">
      {handledata ? (
        <>
          {console.log(getdata)}
          {getdata.map((el) => {
            const { id, name } = el;

            return (
              <div onClick={() => ClickEvent(id)}>
                {id}
                <span>
                  {" "}
                  <h1 style={{ cursor: "pointer" }}>{name}</h1>
                </span>
              </div>
            );
          })}
        </>
      ) : (
        <div>
          {[balaji].map((el) => {
            const id = el.id;
            const email = el.email;
            console.log(el.id);
            return (
              <div>
                {id}&nbsp;&nbsp;{email}
              </div>
            );
          })}
          {console.log([balaji])}
        </div>
      )}
    </div>
  );
}
