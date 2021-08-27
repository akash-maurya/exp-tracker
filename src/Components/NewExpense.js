// eslint-disable-next-line
import React, { useState } from "react";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const [etitle, setTitle] = useState("");
  const [eamount, setAmount] = useState("");
  const [entereddate, setDate] = useState("");
  const [isDisable, setButton] = useState(true);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    // console()
    if(eamount.length && etitle.length && entereddate.length){
      setButton(false);
    }
    else{
      setButton(true);
    }
    console.log(isDisable);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
    //  console.log(eamount);
    console.log(eamount);
    if (eamount.length && etitle.length && entereddate.length) {
      setButton(false);
    } else {
      setButton(true);
    }
    console.log(isDisable);
  };

  const handleChangeDate = (event) => {
   
    const Date = event.target.value ;
    
    console.log(Date);

    setDate(Date)

    if (eamount.length && etitle.length && Date.length) {
      setButton(false);
    } else {
      setButton(true);
    }
    console.log(isDisable);
  };

  const handleSubmit = (event) => {
    console.log(isDisable);
    event.preventDefault();
    // console.log(event)
    const expenseData = {
      title: etitle,
      amount: eamount,
      date: new Date(entereddate),
    };
    props.addData(expenseData);
    // console.log(entereddate);
    setDate("");
    setTitle("");
    setAmount("");
    setButton(true);
  };

  return (
    <form>
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={etitle} onChange={handleChangeTitle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={eamount}
              onChange={handleChangeAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={entereddate}
              onChange={handleChangeDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button id  ="my-btn" disabled = {isDisable} type="submit" onClick={handleSubmit}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpense;
