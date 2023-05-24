import { useState } from "react";
import ConsaddButton from "../AddingArray/Consaddinput/ConsaddButton";
import { Products } from "./Product";
export default function ShoppingCart() {
  const [products, setProducts] = useState(Products);

  const handleIncreaseClick = (elm) => {
    const updateIncrease = products.map((products) => {
      return products.id === elm
        ? { ...products, count: products.count + 1 }
        : products;
    });

    setProducts(updateIncrease);
  };

  const handleDecreaseClick = (decrease) => {
    const updateDecrease = products.map((products) => {
      return products.id === decrease
        ? { ...products, count: products.count - 1 }
        : products;
    });

    const belowZero = updateDecrease.filter((elm) => elm.count > 0);

    setProducts(belowZero);
  };

  return (
    <>
      <div>
        <ul>
          {products.map((product) => {
            const { id, nameed, count } = product;
            return (
              <li key={id}>
                {nameed} (<b>{count}</b>){" "}
                <div
                  style={{ backgroundColor: "red", display: "inline-block" }}
                >
                  {" "}
                  <ConsaddButton
                    label="+"
                    onClick={() => {
                      handleIncreaseClick(id);
                    }}
                  />
                </div>
                &nbsp; &nbsp;
                <div
                  style={{ backgroundColor: "red", display: "inline-block" }}
                >
                  <ConsaddButton
                    label="-"
                    onClick={() => {
                      handleDecreaseClick(id);
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>{" "}
    </>
  );
}
