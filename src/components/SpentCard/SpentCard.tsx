import React from 'react';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';

import { StyledSpentCard } from './styles';

export const SpentCard = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spant = expenses.reduce((total, { cost }) => total + cost, 0);
  return (
    <StyledSpentCard>
      <span>
        Spent so far:{currency.value}
        {spant}
      </span>
    </StyledSpentCard>
  );
};
