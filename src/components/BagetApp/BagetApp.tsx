import React, { useState } from 'react';
import { Currency } from '../../types/types';
import { Title } from '../../ui/styles';
import { BagetCard } from '../BagetCard/BagetCard';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { RemainingCard } from '../RemainingCard/RemainingCard';
import { SpentCard } from '../SpentCard/SpentCard';

import { StyledBagetApp } from './styles';

const options: Currency[] = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'BYN', label: 'BYN' },
];

export const BagetApp = () => {
  const [select, setSelect] = useState<Currency>(options[0]);

  return (
    <StyledBagetApp>
      <Title>Baget App</Title>
      <CurrencySelect value={select} onChange={setSelect} options={options} />
      <BagetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBagetApp>
  );
};
