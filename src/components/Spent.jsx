/*
Spent.jsx- This File is Responsible for Displaying The Spent Budget card that Displays The Spent Budget Of The user.
In Which The AppContext Object is used which is importing data from the AppContext.jsx file 
In Which expenses destructured from the AppContext Object


A Function totalExpenses is being used to calculate the total Spent amount
by using the reduce method on the expenses array.

*/

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function Spent() {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + parseInt(item.price));
  }, 0);

  return (
    <>
      <div className="alert alert-primary">Spent: {totalExpenses}$</div>
    </>
  );
}

export default Spent;
