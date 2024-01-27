/*
Remaning.jsx- This File is Responsible for Displaying The Remaning Budget card that Displays The Remaning Budget Of The user.
In Which The AppContext Object is used which is importing data from the AppContext.jsx file 
In Which expenses and  budget are being destructured from the AppContext Object

A Function totalExpenses is being used to calculate the total Remaining Expenses
by using the reduce method on the expenses array.

Then the Remaning: {budget - totalExpenses} is Calculated.
*/ 

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function Remaning() {
  const { expenses, budget } = useContext(AppContext);
  
 const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + parseInt(item.price));
  }, 0);
  
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <>
      <div className={`alert ${alertType}`}>
        Remaning: {budget - totalExpenses}$
      </div>
    </>
  );
}

export default Remaning;
