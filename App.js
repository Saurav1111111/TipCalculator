import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState(0);
  const [val, setVal] = useState(1);
  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function onSetVal() {
    setPercentage1(0);
    setPercentage2(0);
    setBill("");
  }
  return (
    <div className="container">
      <InputBill bill={bill} onSetBill={setBill} />
      <TipPercentage className="tipbox" percentage={percentage1} onSetPercentage={setPercentage1}>
        {" "}
        How much you like our service
      </TipPercentage>
      <TipPercentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How much your friend like our service{" "}
      </TipPercentage>
      <Output bill={bill} tip={tip} />
      <Reset onSetVal={onSetVal} />
    </div>
  );
}

function InputBill({ bill, onSetBill }) {
  return (
    <div>
      <label> </label>
      <input
        className="input"
        type="text"
        placeholder="ENTER THE BILL AMOUNT"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function TipPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      {" "}
      <div>{children} </div>
      <select
        className="select"
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0"> 0% unsatisfied</option>
        <option value="5"> 5% average</option>
        <option value="10">10% good </option>
        <option value="15">15% very good </option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <div>
      {bill > 0 ? (
        <h3>
          {" "}
          You have to pay {bill + tip} (${bill} + ${tip}) in total
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
function Reset({ onSetVal }) {
  return (
    <button className="button" onClick={onSetVal}>
      {" "}
      RESET{" "}
    </button>
  );
}
