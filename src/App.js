import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import FunctionComponent from "./Components/Functioncomponent";

// import Props from "./Components/Props";

import State from "./Components/State";

import Hooks from "./Components/Hooks";
import FetchiapiV1 from "./Components/FetchiapiV1";

import FetchapiV2 from "./Components/FechapiV2";

import PropsChildren from "./Components/PropsChildren/PropsChildren";

import FormV1 from "./Components/Form/FormV1";

import Nav from "./Components/Nav";
import Lists from "./Components/Lists";

import Program from "./CompetitiveProgramming/Program/Program";
import Miscellaneous from "./Components/KindofTopices/miscellaneous/miscellaneousTopic";
<img src={logo} className="App-logo" alt="logo" />;

function App() {
  return (
    <div class="container bodyC">
      <div class="col-md-12 col-sm-12 nav__design">
        {" "}
        <Nav />
      </div>

      <div class="col-md-12 col-sm-12 pages__design">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FetchiAPi" element={<FetchiapiV1 />} />
          <Route path="/FetchiAPi2" element={<FetchapiV2 />} />
          <Route path="/Form" element={<FormV1 />} />
          <Route path="/FunctionComponent" element={<FunctionComponent />} />
          <Route path="/State" element={<State />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/PropsChildren" element={<PropsChildren />} />
          <Route path="/List" element={<Lists />} />

          <Route path="/Competitiveprogramming" element={<Program />} />

          <Route path="/kindOfTopices" element={<Miscellaneous />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
