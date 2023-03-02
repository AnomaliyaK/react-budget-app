import styled from 'styled-components';

export const StyledRemainingCard = styled.div<{ $isOverspanding: boolean }>`
  display: grid;
  grid-gap: 30px;
  width: 100%;
  max-width: 500px;
  padding: 38px 20px;
  background-color: ${({ $isOverspanding }) =>
    $isOverspanding ? '#FF0000' : '#ccd5ff'};
  color: ${({ $isOverspanding }) => ($isOverspanding ? '#FFFFFF' : '#000000')};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
`;
