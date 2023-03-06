import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styled';

export const InputSearch = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};
