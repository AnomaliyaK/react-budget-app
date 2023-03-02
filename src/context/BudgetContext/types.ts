import { ReactNode } from 'react';

export interface BudgetContextProviderProps {
  children: ReactNode;
}
export interface BudgetContextValue {
  budget: number;
  setNewBudget: (value: number) => void;
}
