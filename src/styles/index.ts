import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export default GlobalStyle;
