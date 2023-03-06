import styled from 'styled-components';
import cross from '../../assets/icons/cross.svg';

export const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 60px 20px;
  gap: 20px;
  width: 100%;
  height: 50px;
  padding: 15px 20px;
  border-bottom: 2px solid #ccd5ff;
`;
export const StyledExpensesName = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const StyledExpensesButton = styled.span`
  background: center no-repeat url(${cross});
`;
