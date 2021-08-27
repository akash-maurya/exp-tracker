
import ExpensItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) =>{

    return <div className = "wrap_items">
        {props.items.map((expense , index)=>{
          return  <ExpensItem 
                        key = {index}
                        id = {index}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date} 
                        onDelete  = {props.onDelete}   
                 />
        })}
    </div> ;
}

export default Expenses ;