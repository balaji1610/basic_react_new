import React from "react";

import './css/Components.css'

import Props from "./Props";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 class="basicReact">BASIC REACT</h1>
        <h1> Hello BALAJI</h1>
        <h1> Hello BALAJI</h1>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <Props name="balaji" developer="MERN"  namev2="Rio" say="Berlin"  />
   
      </div>
    );
  }
}

export default Home;
