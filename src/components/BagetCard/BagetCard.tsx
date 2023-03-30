import { useBadgetContext, useCurrencyContext } from 'context';
import { useInput, useToggle } from 'hooks';
import {
  StyledBagetCard,
  StyledButtonBaget,
  StyledInputBudge,
  StyledTitleBudget,
} from './styles';

export const BagetCard = () => {
  const { budget, setNewBudget } = useBadgetContext();

  const { currentCurrency } = useCurrencyContext();

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
          <StyledInputBudge
            type="number"
            placeholder="Enter  budget ..."
            {...inputBudget}
          />
          <StyledButtonBaget onClick={handleSave}>Save</StyledButtonBaget>
        </>
      ) : (
        <>
          <StyledTitleBudget>
            Buget: {currentCurrency.value}
            {budget}
          </StyledTitleBudget>
          <StyledButtonBaget onClick={handleEdit}>Edit</StyledButtonBaget>
        </>
      )}
    </StyledBagetCard>
  );
};
