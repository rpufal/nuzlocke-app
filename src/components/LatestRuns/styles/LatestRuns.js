import styled from "styled-components";

export const LatestSection = styled.section`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.5%;
  padding-bottom: 0.7%;
  background-color: ${props => props.theme.colors.contrast};
  border-top: 0.35rem solid ${props => props.theme.colors.primary};

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }


  .title {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding-left: 5%;
  }

  .current-run {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5%;
    /* margin-top: 0.5rem; */
  }

  .game-cover {
    width: 6%;
  }

  .country-icon {
    width: 6%;
  }


`;