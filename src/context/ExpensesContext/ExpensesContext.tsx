import { createContext, useContext, useState } from 'react';
import { ExpensesContextProviderProps, ExpensesContextValue } from './types';

// Компонент, в котором сохраняем контекст, созданный ф-цией createContext()
const ExpensesContext = createContext<ExpensesContextValue>(
  {} as ExpensesContextValue
);

// декларация хука
const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(
    () => {
      return {
        expenses: [
          {
            id: 1,
            name: 'ps5',
            cost: 1000,
          },
          { id: 2, name: 'ps6', cost: 2000 },
        ],

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

// кастомный хук на хук useState()
export const useExpensesContext = () =>
  useContext<ExpensesContextValue>(ExpensesContext);

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
