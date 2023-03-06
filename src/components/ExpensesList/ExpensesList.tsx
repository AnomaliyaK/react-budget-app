import { ExpensesItem } from '../ExpensesItem/ExpensesItem';
import { StyledExpensesList } from './styles';
import { Expense } from '../../context/ExpensesContext/types';

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <StyledExpensesList>
      {expenses.map((expense) => {
        return <ExpensesItem expense={expense} key={expense.id} />;
      })}
    </StyledExpensesList>
  );
};
