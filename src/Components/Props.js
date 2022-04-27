
/* Props we can set properies of our own custom components */
/* Props are used to pass data */
/* Components receive data from outside with props */
/* Data From Props is read-only and can not be modified by a component that is receiving it from outside */


import React from "react";
function Props(props){


    return(

        <section className ="Props">
<div>

    <h1>Hello {props.nameV1}, Is a {props.developer} Stack Developer</h1>
    </div>
    <div>

    <h2>Hi {props.namev2},How are you ?,It's {props.say}</h2>
    <hr/>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">AREA</th>
      <th scope="col">MOBILE NUMBER</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.area}</td>
      <td>{props.mobilenumber}</td>
    </tr>
    <tr>
    <th scope="row">{props.id1}</th>
      <td>{props.name1}</td>
      <td>{props.area1}</td>
      <td>{props.mobilenumber1}</td>
    </tr>
  
  </tbody>
</table>

</div>

        </section>
    )
} //end



export default Props;