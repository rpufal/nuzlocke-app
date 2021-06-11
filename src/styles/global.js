import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }
`;