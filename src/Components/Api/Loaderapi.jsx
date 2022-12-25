import { useState, useEffect } from "react";
export default function () {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState();
  const fetchData = async () => {
    setLoading(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      console.log(true);
    } else {
      const data = await response.json();

      setLoading(false);
      console.log(false);
      return setUser(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Loade API
      <div>
        <h1>
          {loading ? (
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            "FetchData"
          )}
        </h1>
        {user.map((item) => {
          //personal detils
          const { name, username, id, phone, website } = item;
          //address

          const { city, street, suite, zipcode } = item.address;

          const { lat, lng } = item.address.geo;
          //company details

          const { catchPhrase, bs } = item.company;
          console.log(item, "item");
          return (
            <div>
              <div class="col-md-12 col-sm-12 fetchapi">
                <div class="row">
                  <div class="col-md-4 col-sm-4">
                    {" "}
                    <section>
                      <h1>Personal Details</h1>
                      <div>Id : {id}</div>
                      <div>Name : {name}</div>
                      <div>Username : {username}</div>
                      <div>phone : {phone}</div>
                      <div>website : {website}</div>
                    </section>
                  </div>
                  <div class="col-md-4 col-sm-4 fetch">
                    <section>
                      <h1>Address Details</h1>
                      <div>City: {city}</div>
                      <div>street: {street}</div>
                      <div>suite: {suite}</div>
                      <div>zipcode: {zipcode}</div>
                      <div>lat : {lat}</div>
                      <div>lng: {lng}</div>
                    </section>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <section>
                      <h1>Company Details</h1>

                      <div>Name : {item.company.name}</div>
                      <div>catchPhrase : {catchPhrase}</div>
                      <div>bs : {bs}</div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
