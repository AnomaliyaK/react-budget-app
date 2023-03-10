import { createContext, useContext, useState } from 'react';
import { ExpensesContextProviderProps, ExpensesContextValue } from './types';

const ExpensesContext = createContext<ExpensesContextValue>(
  {} as ExpensesContextValue
);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(
    () => {
      return {
        expenses: [],

        addNewExpenses: (expense) => {
          setExpensesContext((ctx) => ({
            ...ctx,
            expenses: [...ctx.expenses, expense],
          }));
        },

        deleteExpense: (id) => {
          setExpensesContext((ctx) => ({
            ...ctx,
            expenses: ctx.expenses.filter((expense) => expense.id !== id),
          }));
        },
      };
    }
  );
  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<ExpensesContextValue>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
