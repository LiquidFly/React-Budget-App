/*
AddExpenseForm.jsx - This file is responsible for creating a form that can be used to add
Expenses to the List of Expenses It uses the AppContext Object to get the data from the AppContext.jsx File

Initally useState hook is used to store the values of the Name and cost variables.

dispatch function is being used to add Expenses to the List of current Expenses.
It is being called inside the onSubmit function.

An object named expense is being created which contain the new price and the title enterd 
by the user.
This object is beng passed to the dispatch method as payload and type of action is also passed.
*/

import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { nanoid } from "nanoid";

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    const expense = {
      id: nanoid(),
      price: parseInt(cost),
      title: name,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost("");
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required="required"
              className="form-control"
              name=""
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="cost">Cost</label>
            <input
              type="number"
              required="required"
              className="form-control"
              name=""
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
          <button className="btn mt-3  btn-primary">Save</button>
        </div>
      </form>
    </>
  );
}
export default AddExpenseForm;
