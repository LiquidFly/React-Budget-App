/*
AppContext.jsx - This is the main Context File of the App.
Which contains all of the logic for Actions to be performed on the app.

Initally createContext is imported and it is used for creating the contextObject named 
AppContext Which Holds the data that we want to pass throughout the app.
Then It is also exported.

An obj named initialState is being created which store the initial data for the components
to be rendered.

We Create An AppProvider function in Which it return an AppContext.Provider around which
All The Components are being Wrapped around so that they can access the
data from AppContext obj.

This Provider takes a value prop through which data is being send to the other components

With {props.children} All The Components which are Wrapped around can be displayed.


Inside the AppProvider function state variable is created using the useReducer hook
to updates the states.
The useReducer hook took the reducer function and initialState as parameters to perform.

For this AppReducer the reducer function is also being created which takes CrrState, action
as parameters with action.type property we can use it know what action we want to perform 
using the switch statements.

CrrState signifies to the original state which is being updated and then returned.
*/

import { createContext, useReducer } from "react";

// Reducer Function
function AppReducer(CrrState, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...CrrState,
        expenses: [...CrrState.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...CrrState,
        expenses: CrrState.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "EDITED_BUDGET":
      return {
        ...CrrState,
        budget: action.payload,
      };

    default:
      return CrrState;
  }
}

// Initial State of the Context Object
const initialState = {
  budget: 20000,
  expenses: [
    {
      id: "1231232",
      title: "Shopping",
      price: "50$",
    },
    {
      id: "1231233",
      title: "Holiday",
      price: "20$",
    },
    {
      id: "1231234",
      title: "Fuel",
      price: "120$",
    },
  ],
};

// Context Object
export const AppContext = createContext();

// Provider
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const { budget: initialBudget } = props; // Extract budget from props

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
