
/* Props we can set properies of our own custom components */
/* Props are used to pass data */
/* Components receive data from outside with props */
/* Data From Props is read-only and can not be modified by a component that is receiving it from outside */


import React from "react";
function Props(props){


    return(

        <section name ="Props">
<div>

    <h1>Hello {props.name}, Is a {props.developer} Stack Developer</h1>
    </div>
    <div>

    <h2>Hi {props.namev2},How are you ?,It's {props.say}</h2>
</div>

        </section>
    )
}



export default Props;