import styled from "styled-components";

export const GameCardDisplay = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 5px;
  margin-left: 5px; */
  width: 20%;
  align-items: center;
  /* border: 1px solid ${props=> props.theme.colors.primary}; */
  margin: 1rem;


  h4 {
    color: ${props=> props.theme.colors.primary};
    width: 70%;
    text-align: center;
    word-wrap: break-word;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
  }
  p {
    font-size: 0.8rem;
  }
  img {
    width: 10rem;
  }
`;