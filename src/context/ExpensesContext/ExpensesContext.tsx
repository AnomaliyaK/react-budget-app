import { createContext, useState } from 'react';
import { ExpensesContextProviderProps, ExpensesContextValue } from './types';

// Компонент, в котором сохраняем контекст, созданный ф-цией createContext()
export const ExpensesContext = createContext<ExpensesContextValue>(
  {} as ExpensesContextValue
);

// декларация хука
const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(
    () => {
      return {
        expenses: [45, 23],
      };
    }
  );
  return expensesContext;
};

// кастомный хук на хук useState()

// provider из компонента контекста
export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
