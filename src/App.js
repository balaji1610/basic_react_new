import logo from './logo.svg';
import './App.css';

import Home from "./Components/Home";

import FunctionComponent from "./Components/Functioncomponent";

// import Props from "./Components/Props";

import State from "./Components/State";

import Hooks from "./Components/Hooks";

<img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
  
 <div class="container bodyC">
      <div class="col-md-12 col-sm-12">

        <div class="row"> 

          <div class="col-md-6 col-sm-6">
          <Home></Home>
          </div>
          <div class="col-md-6 col-sm-6">
            
          <FunctionComponent></FunctionComponent>
          <hr/>
         <State></State>
         <hr/>
           <Hooks></Hooks>
           <hr/>
        </div> 



      </div>
    </div>   


      
    </div>
  );
}

export default App;
