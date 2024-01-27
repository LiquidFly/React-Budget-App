/*
ExpenseItem.jsx - The File is Responsible for Displaying an Each particular 
Item of the Expense List.It uses the AppContext Object to get the data from the AppContext.jsx File

It Take id,title,price as props in which title and price are being used
for Displaying the content.

Then dispatch is being destructured by using the useContext hook 
dispatch is being used for updating the state by calling the useReducer hook.

In The handleDeleteExpense is used to delete an item from the Expenses list
inside which the dispatch is used in which an obj is passed to it with type of action and payload.

This data is being sent to the AppReducer Function which uses this data 
as action.type is a property which indicates what action to be performed.

*/ 

import React,{useContext} from "react";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../context/AppContext.jsx";

function ExpenseItem({ id,title, price }) {


  const {dispatch} = useContext(AppContext);


  function handleDeleteExpense(){
    dispatch({
      type:"DELETE_EXPENSE",
      payload : id,
    })
  }

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          {title}
          <div>
            <span>{price}</span>
            <span onClick={handleDeleteExpense}>
              <MdDeleteForever />
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ExpenseItem;
