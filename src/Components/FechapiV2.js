import React from "react";

import "./css/Components.css";

class FechapiV2 extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //   .then((res) => {
      //     console.log(res);
      //   })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div>
        {" "}
        <div className="App">
          <h1> Fetch data from an api in react </h1>{" "}
          {items.map((item) => (
            <ol key={item.id}>
              User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
              {item.email}
            </ol>
          ))}
        </div>
        <div>
          <table class="table table-primary table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Company Name</th>
                <th scope="col">Company City</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr class="table-secondary">
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.company.name}</td>
                  <td>{item.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FechapiV2;
