import styled from "styled-components";

const AppContainer = styled.main`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const AppHeader = styled.header`
    padding: 2rem 0;
    box-sizing: border-box; 
    text-align: center;
    margin-bottom: 2rem;
    background-color: #f5f5f5;
`;
const HeaderTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: #333;
`;



export { AppContainer, AppHeader, HeaderTitle };