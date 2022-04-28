import React from "react";

import "./css/Components.css";

import Props from "./Props";
class Home extends React.Component {
  render() {
    var Datatable = [
      {
        id: "1",
        name: "Balaji",
        area: "Tirunelveli",
        mobilenumber: "1234567890",
      },

      { id: "2", name: "Alex", area: "Chennai", mobilenumber: "1122334455" },
    ];

    return (
      <div>
        <h1 class="basicReact">BASIC REACT</h1>
        <Props
          nameV1="balaji"
          developer="MERN"
          namev2="Rio"
          say="Berlin"
          id={Datatable[0].id}
          name={Datatable[0].name}
          area={Datatable[0].area}
          mobilenumber={Datatable[0].mobilenumber}
          id1={Datatable[1].id}
          name1={Datatable[1].name}
          area1={Datatable[1].area}
          mobilenumber1={Datatable[1].mobilenumber}
        ></Props>

        <hr />

        <h1>{1 + 1}</h1>
        <h1>{Math.random()}</h1>
      </div>
    );
  }
}

export default Home;
