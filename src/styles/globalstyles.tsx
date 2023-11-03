import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    &::-webkit-scrollbar {
      width: 10px;
      background: ${({ theme }) => theme.colors.background};
    }
    &::-webkit-scrollbar-thumb  {
      background: ${({ theme }) => theme.colors.secondary};
  }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.primary};
    background: none;
  }
`;

export default GlobalStyle;
