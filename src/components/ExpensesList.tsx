import React, { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext/ExpensesContext';

export const ExpensesList = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <ul>
      {expenses.map(
        (
          i:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined
        ) => {
          return <li>{i}</li>;
        }
      )}
    </ul>
  );
};
