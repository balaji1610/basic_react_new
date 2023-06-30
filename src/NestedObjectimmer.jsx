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

  const rupeeCoinimage = "https://img.icons8.com/fluency/48/rupee.png";
  const [image, setImage] = useState(rupeeCoinimage);
  const imgeListAll = [
    "http://www.pngimagesfree.com/Money/Rupees/500-rupees-png.png",
    "https://en.numista.com/catalogue/photos/inde/3178-original.jpg",
  ];
  const handleChange = (e, argument) => {
    const inputValue = Number(e.target.value);
    const insertObject = {
      //Notes
      500: () => {
        setNestedObject((draft) => {
          draft.notes.fivehundered.numberofnotes = inputValue;
          draft.notes.fivehundered.value = inputValue * 500;
        });
        setImage(imgeListAll[0]);
      },
      200: () => {
        setNestedObject((draft) => {
          draft.notes.twohundered.numberofnotes = inputValue;
          draft.notes.twohundered.value = inputValue * 200;
        });
      },
      100: () => {
        setNestedObject((draft) => {
          draft.notes.onehundered.numberofnotes = inputValue;
          draft.notes.onehundered.value = inputValue * 100;
        });
      },
      50: () => {
        setNestedObject((draft) => {
          draft.notes.fifty.numberofnotes = inputValue;
          draft.notes.fifty.value = inputValue * 50;
        });
      },
      20: () => {
        setNestedObject((draft) => {
          draft.notes.twenty.numberofnotes = inputValue;
          draft.notes.twenty.value = inputValue * 20;
        });
      },
      //Coins
      10: () => {
        setNestedObject((draft) => {
          draft.coins.ten.numberofnotes = inputValue;
          draft.coins.ten.value = inputValue * 10;
        });
        setImage(imgeListAll[1]);
      },
      5: () => {
        setNestedObject((draft) => {
          draft.coins.five.numberofnotes = inputValue;
          draft.coins.five.value = inputValue * 5;
        });
      },
      2: () => {
        setNestedObject((draft) => {
          draft.coins.two.numberofnotes = inputValue;
          draft.coins.two.value = inputValue * 2;
        });
      },
      1: () => {
        setNestedObject((draft) => {
          draft.coins.one.numberofnotes = inputValue;
          draft.coins.one.value = inputValue * 1;
        });
      },
    };

    //TotalSum

    return insertObject[argument]();
  };

  const handleSubmit = () => {
    setImage(rupeeCoinimage);
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
    //coins
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
      Note_fifty,
      Note_twenty,
    ];

    console.log(ArrayNumberofNotes, "ArrayNumberofNotes");
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
  // http://www.pngimagesfree.com/Money/Rupees/500-rupees-png.png
  //https://en.numista.com/catalogue/photos/inde/3178-original.jpg ->one ruppe
  //src="https://img.icons8.com/fluency/48/rupee.png"
  return (
    <div>
      <div className="image_Flex_Layout">
        <img src={image} width="220" height="130" className="image_Align" />
      </div>
      {/* 500 */}
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
      {/* 200 */}
      <div className="flex_layout">
        <div>
          <h1>200</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.notes.twohundered.numberofnotes}
            onChange={(e) => handleChange(e, 200)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.notes.twohundered.value}</h1>
        </div>
      </div>
      {/* 100 */}
      <div className="flex_layout">
        <div>
          <h1>100</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.notes.onehundered.numberofnotes}
            onChange={(e) => handleChange(e, 100)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.notes.onehundered.value}</h1>
        </div>
      </div>
      {/* 50 */}
      <div className="flex_layout">
        <div>
          <h1>50</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.notes.fifty.numberofnotes}
            onChange={(e) => handleChange(e, 50)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.notes.fifty.value}</h1>
        </div>
      </div>
      {/* 20 */}
      <div className="flex_layout">
        <div>
          <h1>20</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.notes.twenty.numberofnotes}
            onChange={(e) => handleChange(e, 20)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.notes.twenty.value}</h1>
        </div>
      </div>
      <h1>Coins</h1>
      {/* 10 */}
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
      {/* 5 */}
      <div className="flex_layout">
        <div>
          <h1>5</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.coins.five.numberofnotes}
            onChange={(e) => handleChange(e, 5)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.coins.five.value}</h1>
        </div>
      </div>
      {/* 2 */}
      <div className="flex_layout">
        <div>
          <h1>2</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.coins.two.numberofnotes}
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.coins.two.value}</h1>
        </div>
      </div>
      {/* 1 */}
      <div className="flex_layout">
        <div>
          <h1>1</h1>
        </div>
        <div>
          <h1>*</h1>
        </div>
        <div>
          <input
            type="number"
            value={nestedObjct.coins.one.numberofnotes}
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{nestedObjct.coins.one.value}</h1>
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
