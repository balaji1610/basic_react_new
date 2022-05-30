import react from "react";

const Lists = () => {
  var array = ["Balaji", "Alex", "Chitra", "Berlin", "Denver"];

  const Member = (props) => {
    return <li>Good Morning {props.members} </li>;
  };

  return (
    <div>
      <div>
        {" "}
        <ul>
          {array.map((items, index) => (
            <h1>
              {index}&nbsp;&nbsp;Hello {items}
            </h1>
          ))}
        </ul>
      </div>
      <div>
        {" "}
        <li>
          {array.map((items2) => (
            <Member members={items2} />
          ))}
        </li>
      </div>
    </div>
  );
};

export default Lists;
