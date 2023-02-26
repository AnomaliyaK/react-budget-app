import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ type }: ButtonProps) => {
  return <StyledButton type={type}>Done</StyledButton>;
};
