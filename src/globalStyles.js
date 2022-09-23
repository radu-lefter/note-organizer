import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    font-family: Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;
 
export default GlobalStyle;