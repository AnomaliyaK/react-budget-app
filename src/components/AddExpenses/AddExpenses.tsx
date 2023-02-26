import React from 'react';
import { Title } from '../../ui/styles';
import { Form } from '../Form/Form';
import { StyledAddExpenses } from './styles';

export const AddExpenses = () => {
  return (
    <StyledAddExpenses>
      <Title>Add Expense</Title>
      <Form />
    </StyledAddExpenses>
  );
};
