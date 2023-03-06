import React from 'react';
import { Expense } from '../../context/ExpensesContext/types';
import { Badge } from '../Badge/Badge';
import {
  StyledExpensesButton,
  StyledExpensesItem,
  StyledExpensesName,
} from './styled';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
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
