import { useExpensesContext } from '../context/ExpensesContext/ExpensesContext';

export const ExpensesList = () => {
  const { expenses, deleteExpense } = useExpensesContext();

  return (
    <ul>
      {expenses.map(({ id, name, cost }) => {
        return (
          <li>
            <span>{name}------</span>
            <span>${cost}</span>
            <button onClick={() => deleteExpense(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};
