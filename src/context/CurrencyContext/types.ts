import { ReactNode } from 'react';
import { Currency } from '../../types/types';

export interface CurrencyContextProviderProps {
  children: ReactNode;
}

export interface CurrencyContextValue {
  currency: Currency;
}
