import { useCurrencyContext, useExpensesContext } from 'context';
import { StyledSpentCard } from './styles';

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spant = expenses.reduce((total, { cost }) => total + Number(cost), 0);
  return (
    <StyledSpentCard>
      Spent so far: {currentCurrency.value}
      {spant}
    </StyledSpentCard>
  );
};
