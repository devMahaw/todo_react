import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

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

export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  display: block;
  font-weight: bold;
  margin: 40px 0px;
  font-size: 18px;
`;

export const TextField = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #a1a1a1;
  width: 100%;
  font-size: 16px;
  outline: none;
`;

export const Button = styled.button`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  border-radius: 8px;
  margin-right: 8px;
`;

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`;

export default GlobalStyle;
