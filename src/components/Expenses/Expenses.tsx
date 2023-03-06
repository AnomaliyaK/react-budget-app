import { useExpensesContext } from 'context';
import { useDebounce, useInput } from 'hooks';
import React, { useEffect, useState } from 'react';
import { StyledExpenses, StyledText } from './styles';
import { Expense } from '../../context/ExpensesContext/types';
import { ExpensesList, InputSearch, Title } from 'components';

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue.value);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    );
  }, [debouncedValue, expenses]);

  return (
    <StyledExpenses>
      <Title title="Expenses" />
      <InputSearch placeholder="search..." {...searchValue} />
      {filteredExpenses.length ? (
        <ExpensesList expenses={filteredExpenses} />
      ) : (
        <StyledText>Oooops 🙈</StyledText>
      )}
    </StyledExpenses>
  );
};
