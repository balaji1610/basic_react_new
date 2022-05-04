// Reference Website https://reactgo.com/react-props-children/

//props.children is used to add the data between the opening and closing JSX tags.

import "../css/Components.css";

function Parent(props) {
  return <div className="parent__align">{props.children}</div>;
  //children is a keyword
}

export default Parent;
