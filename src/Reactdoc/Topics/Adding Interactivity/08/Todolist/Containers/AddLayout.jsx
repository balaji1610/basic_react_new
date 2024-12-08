import { useState } from "react";
import { List } from "../List";
import Todoinput from "../TodoComponents/Todoinput";
import TodoBtn from "../TodoComponents/TodoBtn";
import Checkbox from "../TodoComponents/Checkbox";

let id = 3;
export default function AddLayout() {
  const [product, setProduct] = useState(List);

  const [title, setTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, seteditId] = useState(null);

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

  const handleOnEdidUser = (id, title) => {
    setIsEdit(true);
    setTitle(title);
    seteditId(id);
  };

  const handleUserUpdate = () => {
    setProduct((prev) => {
      return prev.map((item) => {
        return item.id == editId ? { ...item, title: title } : item;
      });
    });
    setTitle("");
    setIsEdit(false);
  };

  const handleAllDelete = () => {
    setProduct((prev) => {
      return prev.filter((item) => {
        return !item.done;
      });
    });
  };

  return (
    <div>
      <Todoinput
        placeholder="Type a Text"
        value={title}
        onChange={changeText}
      />

      {isEdit ? (
        <TodoBtn label="Update" onClick={handleUserUpdate} />
      ) : (
        <TodoBtn label="Add" onClick={handleclickEvent} />
      )}
      <hr />
      <TodoBtn label="All Delete" onClick={handleAllDelete} />
      <hr />
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

                      <TodoBtn
                        label="Edit"
                        onClick={() => handleOnEdidUser(id, title)}
                      />

                      <TodoBtn
                        label="Delete"
                        onClick={() =>
                          setProduct((prev) => {
                            return prev.filter((item) => {
                              return item.id != id;
                            });
                          })
                        }
                      />
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
