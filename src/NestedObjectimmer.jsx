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
    //All currency value
    const fivehundered = nestedObjct.notes.fivehundered.value;
    const twohundered = nestedObjct.notes.twohundered.value;
    const onehundered = nestedObjct.notes.onehundered.value;
    const fifty = nestedObjct.notes.fifty.value;
    const twenty = nestedObjct.notes.twenty.value;
    const ten = nestedObjct.coins.ten.value;
    const five = nestedObjct.coins.five.value;
    const two = nestedObjct.coins.two.value;
    const one = nestedObjct.coins.one.value;

    //Only Notes

    const Note_fivehundered = nestedObjct.notes.fivehundered.numberofnotes;
    const Note_twohundered = nestedObjct.notes.twohundered.numberofnotes;
    const Note_onehundered = nestedObjct.notes.onehundered.numberofnotes;
    const Note_fifty = nestedObjct.notes.fifty.numberofnotes;
    const Note_twenty = nestedObjct.notes.twenty.numberofnotes;

    const Coin_Ten = nestedObjct.coins.ten.numberofnotes;
    const Coin_Five = nestedObjct.coins.five.numberofnotes;
    const Coin_Two = nestedObjct.coins.two.numberofnotes;
    const Coin_One = nestedObjct.coins.one.numberofnotes;

    //Array
    const ArrayofTotalSum = [
      fivehundered,
      twohundered,
      onehundered,
      fifty,
      twenty,
      ten,
      five,
      two,
      one,
    ];

    const ArrayNumberofNotes = [
      Note_fivehundered,
      Note_twohundered,
      Note_onehundered,
      Note_onehundered,
      Note_fifty,
      Note_twenty,
    ];

    const ArrayNumberofCoins = [Coin_Ten, Coin_Five, Coin_Two, Coin_One];

    //operations
    const SumofArrayofTotalSum = ArrayofTotalSum.reduce((a, b) => {
      return a + b;
    }, 0);

    const SumofArrayNumberofNotes = ArrayNumberofNotes.reduce((a, b) => {
      return a + b;
    }, 0);

    const SumofArrayNumberofCoins = ArrayNumberofCoins.reduce((a, b) => {
      return a + b;
    }, 0);

    {
      /*  //React: Expected an assignment or function call and instead saw an expression implentet self exeuting fn */
    }

    (() => {
      setNestedObject((draft) => {
        draft.total.sumoftotal = SumofArrayofTotalSum;
        draft.total.notes = SumofArrayNumberofNotes;
        draft.total.coins = SumofArrayNumberofCoins;
      });
    })();
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
        Total<h1>{nestedObjct.total.sumoftotal}</h1>
      </div>

      <div>
        Total Notes <h1>{nestedObjct.total.notes}</h1>
      </div>
      <div>
        Total Coins <h1>{nestedObjct.total.coins}</h1>
      </div>
    </div>
  );
}
