import { AddExpenses, BagetApp, Expenses } from 'components';
import { StyledApp } from './ui/styles';

export const App = () => {
  return (
    <StyledApp>
      <BagetApp />
      <Expenses />
      <AddExpenses />
    </StyledApp>
  );
};
