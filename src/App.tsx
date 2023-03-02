import React from 'react';
import { AddExpenses } from './components/AddExpenses/AddExpenses';
import { BagetApp } from './components/BagetApp/BagetApp';
import { Expenses } from './components/Expenses/Expenses';
import { StyledApp } from './ui/styles';

export const App = () => {
  return (
    <StyledApp>
      <BagetApp />
      <Expenses />
      <AddExpenses />
    </StyledApp>
  );
};
