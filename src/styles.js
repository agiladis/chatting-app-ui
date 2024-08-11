import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

export const theme = {
  colors: {
    primary: '#4CAF50',
    secondary: '#f1f1f1',
  },
};
