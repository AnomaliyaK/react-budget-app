import { ReactNode } from 'react';

export interface ExpensesContextValue {
  expenses: any;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}
