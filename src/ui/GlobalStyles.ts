import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
}

body {
    font-family: 'Labrada', serif;
    font-weight: 400;
}
button {
    font-family: inherit;;
   
}
input{
    font-family: inherit;
    }
`;
