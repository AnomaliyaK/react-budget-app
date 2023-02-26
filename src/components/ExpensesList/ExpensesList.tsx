import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { ExpensesItem } from '../ExpensesItem/ExpensesItem';
import { StyledExpensesList } from './styles';

export const ExpensesList = () => {
  const { expenses, deleteExpense } = useExpensesContext();

  return (
    <StyledExpensesList>
      {expenses.map(({ id, name, cost }) => {
        return (
          // <ExpensesItem id={id} name={name} cost={cost} />
          <li>
            <span>{name}------</span>
            <span>${cost}</span>
            <button onClick={() => deleteExpense(id)}>x</button>
          </li>
        );
      })}
    </StyledExpensesList>
  );
};
