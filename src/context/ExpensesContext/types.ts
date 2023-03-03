import { ReactNode } from 'react';

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpenses: (value: Expense) => void;
  deleteExpense: (id: string) => void;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}

interface Expense {
  id: string;
  name: string;
  cost: number;
}
