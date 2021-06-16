import styled from "styled-components";

export const DexVaultArticle = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin-bottom: 5.8rem;

.content-index {
  width: 24.5%;
  height: 100%;
  background-color: ${props => props.theme.colors.contrast};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.content-index div h1 {
  margin-bottom: 0.5rem;
}

.main-content {
  width: 74.5%;
  background-color: ${props => props.theme.colors.contrast};
}

ul {
  list-style-type: none;
}

li {
  margin-bottom: 0.5rem;
}

div {
  margin: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main-content div p,h2,h3 {
  margin-bottom: 0.5rem;
}

.other-articles {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
}
`;
