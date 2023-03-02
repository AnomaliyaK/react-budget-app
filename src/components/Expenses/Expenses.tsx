import React, { useEffect, useState } from 'react';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { useInput } from '../../hooks/useInput';
import { Title } from '../../ui/styles';
import { ExpensesList } from '../ExpensesList/ExpensesList';
import { Input } from '../Input/Input';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  // const { searchValue } = useInput();

  // const { expenses } = useExpensesContext();
  // стейт нужен для отрисовки списка пользователю
  // const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  // useEffect(() => {
  //   setFilteredExpenses((prevData) => filter(123));
  // }, [searchValue]);

  return (
    <StyledExpenses>
      <Title>Expense</Title>
      {/* <input type="text" {...searchValue} /> */}
      <Input placeholder="search..." type="text" />
      {/* <ExpensesList expenses={filteredExpenses} /> */}
      <ExpensesList />
    </StyledExpenses>
  );
};
