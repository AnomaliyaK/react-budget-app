import styled from 'styled-components';

export const StyledBagetCard = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
  max-width: 768px;
  padding: 38px 20px;
  background-color: #7cc6fe;
  border-radius: 10px;
`;

export const StyledInputBudge = styled.input`
  font-size: 20px;
  background: #7cc6fe;
  border: none;
  border-radius: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const StyledTitleBudget = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
`;

export const StyledButtonBaget = styled.button`
  padding: 10px 30px;
  font-size: 14px;
  color: #000000;
  background: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
