// Reference Website https://reactgo.com/react-props-children/

import "../css/Components.css";

function Parent(props) {
  return <div className="parent__align">{props.children}</div>;
  //children is a keyword
}

export default Parent;
