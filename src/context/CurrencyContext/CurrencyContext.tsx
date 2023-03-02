import { createContext, ReactNode, useContext, useState } from 'react';
import { Currencies } from '../../config/currency';
import { CurrencyContextProviderProps, CurrencyContextValue } from './types';

const CurrencyContext = createContext<CurrencyContextValue>(
  {} as CurrencyContextValue
);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(
    () => {
      return {
        currency: { label: 'USD', value: Currencies.USD },
      };
    }
  );
  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<CurrencyContextValue>(CurrencyContext);
export const CurrencyContextProvider = ({
  children,
}: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
