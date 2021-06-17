import styled from "styled-components";

export const GamesFilterDisplay = styled.div`
/* background-color: black; */
width: 92%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-right: 8%;
margin-bottom: 2%;
form {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
}

select {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
  /* border-radius: 5px; */
}

div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

p {
  margin-left: 10px;
}

button {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  /* border: 1px solid ${props => props.theme.colors.secondary}; */
  border: none;
  border-radius: 8px;
  padding: 5px;
  font-size:1rem;
  font-weight: bold;
}
`;