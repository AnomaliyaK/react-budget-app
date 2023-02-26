import { ReactNode } from 'react';

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpenses: (value: Expense) => void;
  deleteExpense: (id: number) => void;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}

interface Expense {
  id: number;
  name: string;
  cost: number;
}
