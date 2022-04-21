import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
import Home from "./Components/Home";

import FunctionComponent from "./Components/FunctionComponent";

import Props from "./Components/Props";

import State from "./Components/State";

import Hooks from "./Components/Hooks";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<Home />, document.getElementById("root"));

ReactDOM.render (<FunctionComponent/>,document.getElementById("FunctionComponent"));

ReactDOM.render (<Props name="balaji" developer="MERN" />,document.getElementById("Props"));

ReactDOM.render( <State/>,document.getElementById("State"));

ReactDOM.render(<Hooks/>,document.getElementById("Hooks"))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
