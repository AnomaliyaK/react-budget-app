import { ReactNode } from 'react';
import { CurrencyValue } from '../../types/types';

export interface CurrencyContextProviderProps {
  children: ReactNode;
}

export interface CurrencyContextValue {
  currentCurrency: CurrencyValue;
  currencies: CurrencyValue[];
  changeCurrency: (option: CurrencyValue) => void;
}
