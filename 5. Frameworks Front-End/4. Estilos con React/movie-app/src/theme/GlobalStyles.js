import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.main};
  }
    a {
    text-decoration: none;
    }
`;

export default GlobalStyles;