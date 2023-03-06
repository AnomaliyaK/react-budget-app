import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px;
  font-size: 16px;
  color: #ffffff;
  background: #23c9ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    pointer-events: none;
  }
`;

export { StyledButton };
