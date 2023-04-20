import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-shadow: 0 0 0 0;
  }

  body {
    width: 100vw;
    height: 100vh;

    font-family: 'Inter';
  }
`;
