import React from 'react';
import { useExpensesContext } from '../context/ExpensesContext/ExpensesContext';

export const Form = () => {
  const { addNewExpenses } = useExpensesContext();
  return (
    <div>
      <h1>Form</h1>
      <button
        onClick={() => addNewExpenses({ id: 3, name: 'ps7', cost: 3000 })}
      >
        Add Expenses
      </button>
    </div>
  );
};
