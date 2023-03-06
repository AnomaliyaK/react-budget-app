import { useCurrencyContext } from 'context';
import Select, { SingleValue } from 'react-select';
import { CurrencyValue } from '../../types/types';
import { selectStyles } from './styles';

export const CurrencySelect = () => {
  const { currentCurrency, currencies, changeCurrency } = useCurrencyContext();
  const handleCurrency = (option: SingleValue<CurrencyValue>): void => {
    if (option) changeCurrency(option);
  };
  return (
    <Select
      options={currencies}
      styles={selectStyles}
      onChange={handleCurrency}
      value={currentCurrency}
      isMulti={false}
    />
  );
};
