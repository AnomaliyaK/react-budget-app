import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  max-width: 768px;
  /* padding: 20px; */
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 20px;
`;

// const Button = styled.button`
//   font-size: 16px;
//   line-height: 20px;
//   color: #ffffff;
//   background: #23c9ff;
// `;

export { StyledForm, InputGroup };
