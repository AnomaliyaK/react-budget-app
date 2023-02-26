import { SubmitHandler, useForm } from 'react-hook-form';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { InputGroup, StyledForm } from './styles';

type InputTypes = {
  nameExpense: string;
  costExpense: number;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputTypes>();

  const { addNewExpenses } = useExpensesContext();

  const onSubmit: SubmitHandler<InputTypes> = ({
    nameExpense,
    costExpense,
  }: any) => {
    addNewExpenses({ id: 4, name: nameExpense, cost: costExpense });
    console.table('lopata:', nameExpense);
    console.table('sobaka:', costExpense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* <h1>Add Expense</h1> */}
      <InputGroup>
        {/* {' '} */}
        <Input
          placeholder="enter name"
          type="text"
          {...register('nameExpense', { required: 'name is required' })}
        />
        {errors.nameExpense?.message && (
          <span>{errors.nameExpense.message}</span>
        )}
        <Input
          placeholder="enter cost"
          type="number"
          {...register('costExpense', { required: 'cost is required' })}
        />
        {errors.costExpense?.message && (
          <span>{errors.costExpense.message}</span>
        )}
        {/* <input
          type="text"
          placeholder="enter name"
          {...register('nameExpense', { required: 'name is required' })}
        />
        {errors.nameExpense?.message && (
          <span>{errors.nameExpense.message}</span>
        )}
        <input
          type="number"
          placeholder="enter cost"
          {...register('costExpense', { required: 'cost is required' })}
        />
        {errors.costExpense?.message && (
          <span>{errors.costExpense.message}</span>
        )} */}
      </InputGroup>
      <Button type="submit" />
    </StyledForm>
  );
};
