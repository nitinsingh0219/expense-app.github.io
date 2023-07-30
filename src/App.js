import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let dummyExpenses = [
  {
    id: 'e1',
    title: 'Clothes',
    amount: 3200,
    date: new Date(2023, 2, 27),
  },
  { id: 'e2',
    title: 'Birthday Party',
    amount: 5000,
    date: new Date(2023, 1, 19) 
  },
  {
    id: 'e3',
    title: 'Trip',
    amount: 2500,
    date: new Date(2023, 5, 10),
  },
  {
    id: 'e4',
    title: 'Fee',
    amount: 11000,
    date: new Date(2023, 3, 12),
  },
];

const App = () => {

  let [expenses, setExpenses] = useState(dummyExpenses);

  const handleNewExpense = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]; 
    });
  }; 

  return (
    <div>
      <NewExpense onNewExpense={handleNewExpense}></NewExpense> 
      <Expenses expenseItem={expenses} />
    </div>
  ); 
}

export default App;
