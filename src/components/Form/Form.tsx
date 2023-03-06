import { SubmitHandler, useForm } from 'react-hook-form';
import { InputGroup, StyledForm } from './styles';
import { v4 as uuidv4, v4 } from 'uuid';
import { useExpensesContext } from 'context';
import { Button, Input } from 'components';

export type InputTypes = {
  name: string;
  cost: number;
  search: string;
};

export const Form = () => {
  const { handleSubmit, register, reset } = useForm<InputTypes>();

  const { addNewExpenses } = useExpensesContext();

  const onSubmit: SubmitHandler<InputTypes> = (expense: InputTypes) => {
    const newExpense = { ...expense, id: v4() };
    addNewExpenses(newExpense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Input
          placeholder="enter name"
          type="text"
          name="name"
          register={register}
        />

        <Input
          placeholder="enter cost"
          type="number"
          name="cost"
          register={register}
        />
      </InputGroup>
      <Button type="submit" />
    </StyledForm>
  );
};
