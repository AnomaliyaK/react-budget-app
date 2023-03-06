import React, { useEffect, useState } from 'react';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useInput } from '../../hooks/useInput';
import { InputSearch } from '../InputSearch/InputSearch';
import { ExpensesList } from '../ExpensesList/ExpensesList';
import { Title } from '../Title/Title';
import { StyledExpenses, StyledText } from './styles';
import { Expense } from '../../context/ExpensesContext/types';

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
