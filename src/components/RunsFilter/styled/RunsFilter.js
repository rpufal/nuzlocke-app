import styled from "styled-components";

export const RunsFilterDisplay = styled.div`
width: 90%;
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-direction: row;
justify-content: space-between;

select {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
}
`;