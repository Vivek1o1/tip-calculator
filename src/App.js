import { useState } from "react";
import "./styles.css";

const App = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [splitBill, setSplitBill] = useState(0);
  return (
    <div className="App">
      <h1>TIP CALCULATOR</h1>

      <input
        type="number"
        placeholder="Total Bill"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Total People"
        value={people}
        onChange={(e) => {
          setPeople(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setSplitBill(Math.floor(bill / people));
        }}
      >
        TIP
      </button>
      <h1>Bill per person = {splitBill}</h1>
    </div>
  );
};

export default App;
