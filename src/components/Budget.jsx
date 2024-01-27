/*
Budget.jsx- This File is Responsible for Displaying The Budget card
that Displays The Budget Of The user.In Which The AppContext Object is 
used which is importing data from the AppContext.jsx file.
 The budget variable is destructured by using the useContext hook.
*/

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";

function Budget() {
  const [isEdit, setisEdit] = useState(false);
  const [editedText, seteditedText] = useState("");

  function handleEditBtn() {
    setisEdit(true);
  }

  function handleDoneBtn() {
    setisEdit(false);
    dispatch({
      type: "EDITED_BUDGET",
      payload: editedText,
    });
  }

  function handleEditedText(event) {
    seteditedText(event.target.value);
  }

  const { dispatch } = useContext(AppContext);
  const { budget } = useContext(AppContext);
  return (
    <>
      <div className="alert alert-info p-2 d-flex align-items-center">
        {isEdit ? (
          <div>
            <input
              placeholder="Enter Your Budget$"
              onChange={handleEditedText}
              type="number"
            />{" "}
            <button onClick={handleDoneBtn}>Done?</button>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>Budget: {budget}$</span>{" "}
            <button onClick={handleEditBtn} className="btn btn-success">
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Budget;
