/*Reference https://www.youtube.com/watch?v=td9A_WIKgOk*/

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [Counter, setcounter] = useState(0);

  const inc = () => {
    setcounter((Counter) => Counter + 1);
  };

  const dec = () => {
    setcounter((Counter) => Counter - 1);
  };

  //ComponentDidmount
  //ComponentDidUpdate
  //
  useEffect(() => {
    console.log("UseEffect");
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <button type="button" class="btn btn-primary" onClick={inc}>
        +
      </button>
      &nbsp;&nbsp;
      <span>
        <b>{Counter}</b>
      </span>{" "}
      &nbsp;&nbsp;
      <button type="button" class="btn btn-danger" onClick={dec}>
        -
      </button>
    </div>
  );
};

export default Counter;
