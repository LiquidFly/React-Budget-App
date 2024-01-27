/*
ExpensesList.jsx- This File is Responsible for Displaying the List of  
Expenses Done by the user it uses the AppContext Object to get the data from the
AppContext.jsx File expenses is the array which contains list of Expenses which is 
being destructured by using the useContext hook.

Now map function is used to map through each elemnt of the Array and return an ExpenseItem
for each element of the Array.

Now title,id,price are being passed as props to the ExpenseItem element which are being taken from
the expense object from the array.


*/

import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import { AppContext } from "../context/AppContext.jsx";

function ExpensesList() {
  const { expenses } = useContext(AppContext);
  console.log(expenses);

  return (
    <>
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            price={expense.price}
            key={index}
          ></ExpenseItem>
        ))
      ) : (
        <div className="alert alert-danger" role="alert">
          No More Expenses Left?
        </div>
      )}
    </>
  );
}

export default ExpensesList;
