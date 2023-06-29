import { useImmer } from "use-immer";

export default function NestedObjectimmer() {
  const CashCounter_Payload = {
    notes: {
      fivehundered: {
        numberofnotes: "",
        value: "",
      },
      twohundered: {
        numberofnotes: 2,
        value: 3,
      },
      onehundered: {
        numberofnotes: 2,
        value: 3,
      },
      fifty: {
        numberofnotes: 2,
        value: 3,
      },
      twenty: {
        numberofnotes: 2,
        value: 3,
      },
    },
    coins: {
      ten: {
        numberofnotes: "",
        value: "",
      },
      five: {
        numberofnotes: 2,
        value: 3,
      },
      two: {
        numberofnotes: 2,
        value: 3,
      },
      one: {
        numberofnotes: 2,
        value: 3,
      },
    },
    total: {
      sumoftotal: 230,
      notes: 23,
      coins: 0,
    },
  };

  const [nestedObjct, setNestedObject] = useImmer(CashCounter_Payload);
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

    return insertObject[argument]();
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
    </div>
  );
}
