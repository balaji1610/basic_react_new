import { useState } from "react";
import { List } from "../List";
import Todoinput from "../TodoComponents/Todoinput";
import TodoBtn from "../TodoComponents/TodoBtn";
import Checkbox from "../TodoComponents/Checkbox";

let id = 3;
export default function AddLayout() {
  const [product, setProduct] = useState(List);

  const [title, setTitle] = useState("");

  const changeText = (e) => {
    setTitle(e.target.value);
  };

  const handleclickEvent = () => {
    const update = [...product, { id: id++, title: title, done: false }];

    setProduct(update);
    setTitle("");
  };

  const ChangeCheckbox = (arug) => {
    const updateCheckbox = product.map((product) => {
      return product.id === arug.id ? arug : product;
    });

    setProduct(updateCheckbox);
  };

  return (
    <div>
      <Todoinput
        placeholder="Type a Text"
        value={title}
        onChange={changeText}
      />
      <TodoBtn label="Add" onClick={handleclickEvent} />
      <>
        {" "}
        <ul>
          {product.map((product) => {
            const { id, title, done } = product;
            return (
              <>
                <div>
                  {" "}
                  <div className="Checkbox_2">
                    {" "}
                    <Checkbox
                      checked={done}
                      onChange={(e) => {
                        ChangeCheckbox({ ...product, done: e.target.checked });
                      }}
                    />
                  </div>{" "}
                  <div className="Checkbox">
                    <div key={id}>
                      {title}

                      <TodoBtn label="Edit" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </>
    </div>
  );
}
