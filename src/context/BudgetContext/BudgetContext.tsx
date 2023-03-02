import { createContext, useContext, useState } from 'react';
import { BudgetContextProviderProps, BudgetContextValue } from './types';

// 1- создаем контекст
export const BudgetContext = createContext<BudgetContextValue>(
  {} as BudgetContextValue
);

// 3-декларируем наш собственный кастомный хук
const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextValue>(() => {
    return {
      // изначальное состояние бюджета
      budget: 0,

      //   7-устанавливаем новое значение бюджета
      setNewBudget: (newBudget) => {
        setBudgetContext((ctx) => ({ ...ctx, budget: newBudget }));
      },
    };
  });
  // 4- budgetContext это то, что наследуется дочерними элементами
  return budgetContext;
};

// 6-кастомный хук на хук useContext() для сокращения кода и уменьшения количества импотов в дочерних компонентах
export const useBadgetContext = () =>
  useContext<BudgetContextValue>(BudgetContext);

// 2-provider из компонента контекста useBudgetContextValue()
export const BudgetContextProvider = ({
  children,
}: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
