import { useImmer } from "use-immer";
import { useState, useEffect } from "react";
export default function NestedObjectimmer() {
  const CashCounter_Payload = {
    notes: {
      fivehundered: {
        numberofnotes: 0,
        value: 0,
      },
      twohundered: {
        numberofnotes: 0,
        value: 0,
      },
      onehundered: {
        numberofnotes: 0,
        value: 0,
      },
      fifty: {
        numberofnotes: 0,
        value: 0,
      },
      twenty: {
        numberofnotes: 0,
        value: 0,
      },
    },
    coins: {
      ten: {
        numberofnotes: 0,
        value: 0,
      },
      five: {
        numberofnotes: 0,
        value: 0,
      },
      two: {
        numberofnotes: 0,
        value: 0,
      },
      one: {
        numberofnotes: 0,
        value: 0,
      },
    },
    total: {
      sumoftotal: 0,
      notes: 0,
      coins: 0,
    },
  };

  const [nestedObjct, setNestedObject] = useImmer(CashCounter_Payload);

  const [ovsum, SetOvSum] = useState(0);

  useEffect(() => {
    SetOvSum(ovsum);
  }, [ovsum]);
  const handleChange = (e, argument) => {
    const inputValue = Number(e.target.value);
    const insertObject = {
      500: () =>
        setNestedObject((draft) => {
          draft.notes.fivehundered.numberofnotes = inputValue;
          draft.notes.fivehundered.value = inputValue * 500;
        }),
      10: () =>
        setNestedObject((draft) => {
          draft.coins.ten.numberofnotes = inputValue;
          draft.coins.ten.value = inputValue * 10;
        }),
    };

    //TotalSum

    return insertObject[argument]();
  };

  const handleSubmit = () => {
    const ArrayofTotalSum = [
      nestedObjct.notes.fivehundered.value +
        nestedObjct.notes.twohundered.value +
        nestedObjct.notes.onehundered.value +
        nestedObjct.notes.fifty.value +
        nestedObjct.notes.twenty.value +
        nestedObjct.coins.ten.value +
        nestedObjct.coins.five.value +
        nestedObjct.coins.two.value +
        nestedObjct.coins.one.value,
    ];

    SetOvSum(ArrayofTotalSum.join(""));
  };
  console.log(nestedObjct, "nestedObjct");

  return (
    <div>
      <div className="flex_layout">
        <div>
          <h1>500</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.notes.fivehundered.numberofnotes}
            onChange={(e) => handleChange(e, 500)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.notes.fivehundered.value}</h1>
        </div>
      </div>
      <div className="flex_layout">
        <div>
          <h1>10</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.coins.ten.numberofnotes}
            onChange={(e) => handleChange(e, 10)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.coins.ten.value}</h1>
        </div>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <div>
        Total<h1>{ovsum}</h1>
      </div>
    </div>
  );
}
