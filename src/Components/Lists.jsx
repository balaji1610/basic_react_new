import react from "react";

const Lists = () => {
  var array = ["Balaji", "Alex", "Chitra", "Berlin", "Denver"];

  return (
    <div>
      <ul>
        {array.map((items, index) => (
          <h1>
            {index}&nbsp;&nbsp;Hello {items}
          </h1>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
