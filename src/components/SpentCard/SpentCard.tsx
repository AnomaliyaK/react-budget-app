import React from 'react';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';

import { StyledSpentCard } from './styles';

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spant = expenses.reduce((total, { cost }) => total + Number(cost), 0);
  return (
    <StyledSpentCard>
      Spent so far: {currentCurrency.value}
      {spant}
    </StyledSpentCard>
  );
};
