import styled from "styled-components";

export const GamesDisplay = styled.section`
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

  .panel h1 {
    /* align-self: center; */
    margin-left: 100px;
    margin-bottom: 100px;
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