import styled from "styled-components";

export const CurrentRunDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5%;

  .cell {
    width: 14.2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    /* margin-right: 1%; */
    /* margin-left: 1%; */
  }

  .game-cover {
    width: 40%;
  }

  .won {
    color: green;
  }

  .lost {
    color: red;
  }

  .ongoing {
    color: yellow;
  }

  .country-icon {
    width: 25%;
  }

`;