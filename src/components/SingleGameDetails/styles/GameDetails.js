import styled from "styled-components";

export const GameDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  .sidebar {
    background-color: ${props => props.theme.colors.contrast};
    width: 23%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .info-card {
    width: 90%;
    margin: 5%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info-card img {
    width: 70%;
    /* margin-bottom: 1rem; */
  }

  .info-card h3 {
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 1rem;
  }

  .index {
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .index h3 {
    margin-bottom: 2%;
  }

  .main-content {
    background-color: ${props => props.theme.colors.contrast};
    width: 73%;
  }
`;