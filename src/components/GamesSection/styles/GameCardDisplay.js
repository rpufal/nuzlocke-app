import styled from "styled-components";

export const GameCardDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  margin: 1rem;
  a {
    text-decoration: none;
  }

  h4 {
    color: ${props=> props.theme.colors.primary};
    width: 100%;
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