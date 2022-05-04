import logo from "./logo.svg";
import "./App.css";

import Home from "./Components/Home";

import FunctionComponent from "./Components/Functioncomponent";

// import Props from "./Components/Props";

import State from "./Components/State";

import Hooks from "./Components/Hooks";
import FetchiapiV1 from "./Components/FetchiapiV1";

import FetchapiV2 from "./Components/FechapiV2";

import PropsChildren from "./Components/PropsChildren/PropsChildren";

<img src={logo} className="App-logo" alt="logo" />;

function App() {
  return (
    <div class="container bodyC">
      <div class="col-md-12 col-sm-12">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <Home></Home>
            <FetchiapiV1></FetchiapiV1>
            <FetchapiV2></FetchapiV2>
          </div>
          <div class="col-md-6 col-sm-6">
            <FunctionComponent></FunctionComponent>
            <hr />
            <State></State>
            <hr />
            <Hooks></Hooks>
            <hr />
            <PropsChildren></PropsChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
