import React from 'react';
import { ExpensesList } from './components/ExpensesList';
import { Form } from './components/Form';

export const App = () => {
  return (
    <div>
      <ExpensesList />
      <Form />
      {/* <BagetApp />
      <Expenses />
      <AddExpenses /> */}
    </div>
  );
};
