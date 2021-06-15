import styled from 'styled-components';

export const HeaderNav = styled.header`
  background-color: ${props => props.theme.colors.primary};
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
  position: fixed;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 5%;
  }

  a {
    text-decoration: none;
  }

  input {
    width: 20%;
    background-color: ${props =>  props.theme.colors.secondary};
    color: ${props =>  props.theme.colors.text};
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  h3 {
    color: ${props => props.theme.colors.secondary};
  }
`;