/*The Main File Responsible for Maintaining the Whole UI of The App,
Which Consists of all The Components and the Context Provider That are Placed inside the App Function.
*/
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title.jsx";
import Budget from "./components/Budget.jsx";
import Remaning from "./components/Remaning.jsx";
import Spent from "./components/Spent.jsx";
import ExpensesList from "./components/ExpensesList.jsx";
import AddExpenseForm from "./components/AddExpenseForm.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import  "./index.css"; 

function App() {
  return (
    <AppProvider>
      <div className="container mt-5 ">
        <Title></Title>
        <div className="row ">
          <div className="col-sm">
            <Budget></Budget>
          </div>
          <div className="col-sm">
            <Remaning></Remaning>
          </div>
          <div className="col-sm">
            <Spent></Spent>
          </div>
        </div>
        <h2 className="mt-2">Expenses</h2>
        <ExpensesList></ExpensesList>
        <h2 className="mt-3">Add Expenses</h2>
        <AddExpenseForm></AddExpenseForm>
      </div>
    </AppProvider>
  );
}

export default App;

