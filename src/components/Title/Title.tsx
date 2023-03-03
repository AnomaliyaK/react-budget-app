import React from 'react';
import { StyledTitle } from './styled';

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};
