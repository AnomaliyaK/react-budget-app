import { createContext, useContext, useState } from 'react';
import { Currency } from '../../config/currency';
import { CurrencyContextProviderProps, CurrencyContextValue } from './types';

const CurrencyContext = createContext<CurrencyContextValue>(
  {} as CurrencyContextValue
);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(
    () => ({
      currentCurrency: {
        label: 'USD',
        value: Currency.USD,
      },
      currencies: [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
      ],
      changeCurrency: (currentCurrency) => {
        setCurrencyContext((ctx) => ({ ...ctx, currentCurrency }));
      },
    })
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
