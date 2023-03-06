import { Badge } from 'components';
import { useCurrencyContext, useExpensesContext } from 'context';
import React from 'react';
import { Expense } from '../../context/ExpensesContext/types';
import {
  StyledExpensesButton,
  StyledExpensesItem,
  StyledExpensesName,
} from './styled';

interface ExpensesItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense }: ExpensesItemProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  return (
    <StyledExpensesItem>
      <StyledExpensesName>{expense.name}</StyledExpensesName>
      <Badge cost={expense.cost} currentCurrency={currentCurrency} />
      <StyledExpensesButton
        onClick={() => deleteExpense(expense.id)}
      ></StyledExpensesButton>
    </StyledExpensesItem>
  );
};
