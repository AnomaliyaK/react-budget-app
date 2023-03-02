import React from 'react';
import { useBadgetContext } from '../../context/BudgetContext/BudgetContext';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { StyledRemainingCard } from './styled';

export const RemainingCard = () => {
  const { budget } = useBadgetContext();
  const { currency } = useCurrencyContext();

  const { expenses } = useExpensesContext();

  const remaining =
    budget - expenses.reduce((total, { cost }) => total + cost, 0);

  const isOverspending = remaining < 0;

  return (
    <StyledRemainingCard $isOverspanding={isOverspending}>
      {isOverspending
        ? `Overspending by ${currency.value} ${remaining}`
        : `Remaining: ${currency.value}${remaining}`}
    </StyledRemainingCard>
  );
};
