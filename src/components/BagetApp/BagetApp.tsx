import React, { useContext, useState } from 'react';
import { BudgetContext } from '../../context/BudgetContext/BudgetContext';
import { Currency } from '../../types/types';
import { Title } from '../../ui/styles';
import { BagetCard } from '../BagetCard/BagetCard';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { RemainingCard } from '../RemainingCard/RemainingCard';
import { SpentCard } from '../SpentCard/SpentCard';

import { StyledBagetApp, StyledHandlerBagetApp } from './styles';

const options: Currency[] = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'BYN', label: 'BYN' },
];

export const BagetApp = () => {
  // useState для селекта
  const [select, setSelect] = useState<Currency>(options[0]);

  // 5-хук вызова контекста BudgetContext из BudgetContext.tsx
  // const { budget } = useBadgetContext();

  return (
    <StyledBagetApp>
      <StyledHandlerBagetApp>
        <Title>Baget App </Title>
        <CurrencySelect value={select} onChange={setSelect} options={options} />
      </StyledHandlerBagetApp>
      <BagetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBagetApp>
  );
};
