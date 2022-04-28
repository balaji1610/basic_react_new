/*  State is what allows you to create components that are dynamic and interactive.
 State is For manageing data */

/* Super() keyword refers to the parents class it is used to call the constructor of the parent class
 and to access the parent properties and methods */

import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "React JS",
      Says: "Good Morning",
      Image: "https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png",
    };
  }
  change = () => {
    this.setState({
      Name: "Node JS",
      Says: "Good Evening",
      Image:
        "https://www.fastcomet.com/blog/wp-content/uploads/2021/03/10-nodejs-frameworks-in-2021.png",
    });
  };
  render() {
    return (
      <section className="State">
        <div>
          <p>
            Hello {this.state.Name},{this.state.Says}
          </p>

          <img src={this.state.Image} alt="StateImage" class="imgSize" />
          <br />
          <br />

          <button class="btn btn-primary" onClick={this.change}>
            State
          </button>
        </div>
      </section>
    );
  }
}

export default State;
