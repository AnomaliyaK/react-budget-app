import React, { useEffect, useState } from 'react';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { useInput } from '../../hooks/useInput';
import { Title } from '../../ui/styles';
import { ExpensesList } from '../ExpensesList/ExpensesList';
import { Input } from '../Input/Input';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  const { value } = useInput();

  const { expenses } = useExpensesContext();
  // стейт нужен для отрисовки списка пользователю
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  // useEffect(() => {
  //   setFilteredExpenses((prevData) => filter(123));
  // }, [searchValue]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <input type="text" placeholder="search..." />
      {/* <InputSearch placeholder="search..." type="text" name="name"
          /> */}
      <ExpensesList />
    </StyledExpenses>
  );
};
