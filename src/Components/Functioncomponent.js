import React from "react";

import "./css/Components.css";

import  mern from "./Images/mern.png";

function FunctionComponent (){


  const Datas = "This is function component";
  
/* GetCurrentDateTime: https://tecadmin.net/get-current-date-time-javascript/ */

function time (){
var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

return time;
}


  function Indiantime (){
    var date = new Date();
    var options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    var timeString = date.toLocaleString('en-US', options);
    return timeString;

  }

 
  
return (

<section className="FunctionComponent">
        <div>
        <img src = { mern } alt="mernStack" class="imgSize" /> 

         <h1 class="functionC">FUNCTION COMPONENT</h1>

        <h1> {Datas}</h1>

        <p>{time()}</p>
        <p>{Indiantime()}</p>
        </div>
        </section>
      )
}

export default FunctionComponent;