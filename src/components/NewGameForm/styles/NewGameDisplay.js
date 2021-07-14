import styled from "styled-components";

export const NewGameDisplay = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-top: 2rem; */
  margin-bottom: 1.5%;
  padding-bottom: 0.7%;
  background-color: ${props => props.theme.colors.contrast};
  border-top: 0.35rem solid ${props => props.theme.colors.primary};


  .panel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* margin-left: 2.5%; */
    /* margin-right: 2.5%; */
  }



  .panel {
    margin-left: 2.5%;
    width: 95%;
    margin-right: 2.5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .search-game {
    display: flex;
    width: 75%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .showUnnofficial {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 31%;
    justify-content: space-between;
  }

  .rules-div {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 70%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .optional-rules {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .optional-rules label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .rules-div label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .rules-div label p {
    margin-right: 5px;
  }

  select {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
}

  input {
    margin-left: 10px;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    border: 0.5px solid ${props => props.theme.colors.text};
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
  }

  .cantFind label{
    display: flex;
  }

  .cantFind {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  button {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
  border: 0.5px solid ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  }

  button:hover {
  color: ${props => props.theme.colors.primary};
  border: 0.5px solid ${props => props.theme.colors.primary};
  }

  .title {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding-left: 5%;
  }
`;