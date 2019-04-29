import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html, body, #root{
      height: 100%;
      -webkit-user-select: none;
      -webkit-app-region: drag;
    }

    body{
      text-rendering: optimizeLegibility !important;
      -webkit-app-region: drag
      -webkit-font-smoothing: antialiased !important;
      font-family: 'Montserrat', sans-serif;
      background: #FFF;
      color: #000;
    }
`;