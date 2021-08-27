import React from 'react'
import './ExpenseItem.css'

const Expense = (props) =>{

    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

   const handleDel = ()=>{
       console.log("delete");
        props.onDelete(props.id);
   }

    return (
     
    <div className = "expenseitem">
      <div className = "expenseitem__data">
          <div className = "date">
              <p>{day}</p>
              <p>{month}</p>
              <p>{year}</p>
          </div>
          <h2 className = "description">{props.title}</h2>
          <p className = "price">$ {props.amount}</p>
        </div>
          <button className = "DelButton"  onClick = {handleDel}>Delete</button>
      </div>);
}

export default Expense;