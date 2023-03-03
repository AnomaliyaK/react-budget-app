import React from 'react';

import { Form } from '../Form/Form';
import { Title } from '../Title/Title';
import { StyledAddExpenses } from './styles';

export const AddExpenses = () => {
  return (
    <StyledAddExpenses>
      <Title title="Add Expense" />
      <Form />
    </StyledAddExpenses>
  );
};
