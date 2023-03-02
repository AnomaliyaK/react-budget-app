import React from 'react';
import { useBadgetContext } from '../../context/BudgetContext/BudgetContext';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { StyledRemainingCard } from './styled';

export const RemainingCard = () => {
  const { budget } = useBadgetContext();

  const { expenses } = useExpensesContext();

  const remaining =
    budget - expenses.reduce((total, { cost }) => total + cost, 0);

  const isOverspending = remaining < 0;

  return (
    <StyledRemainingCard $isOverspanding={isOverspending}>
      {isOverspending
        ? `Overspending by ${remaining}`
        : `Remaining: ${remaining}`}
    </StyledRemainingCard>
  );
};
