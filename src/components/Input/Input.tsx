import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputTypes } from '../Form/Form';
import { StyledInput } from './styles';

interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: 'name' | 'cost' | 'search';
  register: UseFormRegister<InputTypes>;
}

export const Input = ({ placeholder, type, name, register }: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      {...register(name, { required: 'value is required' })}
    />
  );
};
