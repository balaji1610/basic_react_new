
import React from "react";

class State extends React.Component{

constructor(props){
    super(props);

    this.state = {
        
        Name:"React JS",
        Says:"Good Morning",
        Image:"https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png"
    };
}


change = () => { 
    this.setState({Name:"Node JS",Says:"Good Evening", Image:"https://www.fastcomet.com/blog/wp-content/uploads/2021/03/10-nodejs-frameworks-in-2021.png"})
}
    render(){


        return(    
        
        <section name="State">
        <div>
            <p>Hello {this.state.Name},{this.state.Says}</p>

    
            <img src = {this.state.Image} alt="StateImage" class="imgSize"  /><br/>
            <br/>

        <button class="btn btn-primary" onClick = {this.change}>State</button>
        
        </div>

        <div>


        </div>

        </section>
        
        )

}
}



export default State;
