import React from 'react';
import Select, { SingleValue } from 'react-select';
import { Currency } from '../../types/types';
import { selectStyles } from './styles';

interface CurrencySelectProps {
  options: Currency[];
  value: Currency;
  onChange: (option: Currency) => void;
}

export const CurrencySelect = ({
  options,
  value,
  onChange,
}: CurrencySelectProps) => {
  const handleCurrency = (option: SingleValue<Currency>): void => {
    if (option) onChange(option);
  };
  return (
    <Select
      options={options}
      styles={selectStyles}
      onChange={handleCurrency}
      value={value}
      isMulti={false}
    />
  );
};
