import React from 'react';
import { Title } from '../../ui/styles';
import { ExpensesList } from '../ExpensesList/ExpensesList';
import { Input } from '../Input/Input';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title>Expense</Title>
      <Input placeholder="search..." type="text" />
      <ExpensesList />
    </StyledExpenses>
  );
};
