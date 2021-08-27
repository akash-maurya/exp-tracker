// import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';
import Header from './Components/header';
 import Expenses from './Components/Expenses';
// import Expense from './Components/ExpenseItem';
// import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense'

function App() {

  const [expensedata , setExpesnseData] = useState([]);
 
  const addExpense = (expense) =>{
        // expensedata.push(expense);
        // console.log(expensedata);
        setExpesnseData((prevData)=>{
          return [...prevData  , expense];
        });
  }
  const handleDelete = (id) =>{
      
        setExpesnseData((prevData)=>{
          return prevData.filter((expense,index)=>{
                  return index !== id ;
          })
        });
  }

   return (
     <div>
       <Header></Header>
       <NewExpense addData={addExpense}  />
      
      <Expenses items = {expensedata} onDelete = {handleDelete}/>
     </div>
   );
}

export default App;
