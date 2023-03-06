import {
  useBadgetContext,
  useCurrencyContext,
  useExpensesContext,
} from 'context';
import { StyledRemainingCard } from './styled';

export const RemainingCard = () => {
  const { budget } = useBadgetContext();
  const { currentCurrency } = useCurrencyContext();

  const { expenses } = useExpensesContext();

  const remaining =
    budget - expenses.reduce((total, { cost }) => total + Number(cost), 0);

  const isOverspending = remaining < 0;

  return (
    <StyledRemainingCard $isOverspanding={isOverspending}>
      {isOverspending
        ? `Overspending by  ${currentCurrency.value}${remaining}`
        : `Remaining: ${currentCurrency.value}${remaining}`}
    </StyledRemainingCard>
  );
};
