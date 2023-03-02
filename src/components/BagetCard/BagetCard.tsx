import { useBadgetContext } from '../../context/BudgetContext/BudgetContext';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';

import { useInput } from '../../hooks/useInput';
import { useToggle } from '../../hooks/useToggle';
import { StyledBagetCard } from './styles';

export const BagetCard = () => {
  // 5-хук вызова контекста BudgetContext из BudgetContext.tsx
  //   7-устанавливаем новое значение бюджета
  const { budget, setNewBudget } = useBadgetContext();

  const { currency } = useCurrencyContext();

  const [isEditMode, toggleEditMode] = useToggle();

  const inputBudget = useInput();

  const handleSave = () => {
    setNewBudget(Number(inputBudget.value));
    toggleEditMode();
  };

  const handleEdit = () => {
    toggleEditMode();
  };

  return (
    <StyledBagetCard>
      {isEditMode ? (
        <>
          <input
            type="number"
            placeholder="Enter  budget ..."
            {...inputBudget}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>
            Baget: {currency.value}
            {budget}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </StyledBagetCard>
  );
};
