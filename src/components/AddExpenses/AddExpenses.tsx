import React from 'react';
import { Form, Title } from 'components';
import { StyledAddExpenses } from './styles';

export const AddExpenses = () => {
  return (
    <StyledAddExpenses>
      <Title title="Add Expense" />
      <Form />
    </StyledAddExpenses>
  );
};
