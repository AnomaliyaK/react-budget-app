import React from 'react';
import { CurrencyValue } from '../../types/types';
import { StyledBudge } from './styled';

interface BadgeProps {
  currentCurrency: CurrencyValue;
  cost: number;
}

export const Badge = ({ currentCurrency, cost }: BadgeProps) => {
  return (
    <StyledBudge>
      {currentCurrency.value}
      {cost}
    </StyledBudge>
  );
};
