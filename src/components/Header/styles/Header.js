import styled from 'styled-components';

export const HeaderNav = styled.header`
  background-color: ${props => props.theme.colors.primary};
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  } */
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 5%;
  }
  input {
    width: 20%;
    background-color: ${props =>  props.theme.colors.secondary};
    color: ${props =>  props.theme.colors.text};
    padding: 5px;
    border-radius: 5px;
  }
  h3 {
    color: ${props => props.theme.colors.secondary};
  }
`;