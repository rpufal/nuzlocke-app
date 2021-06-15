import styled from "styled-components";

export const ArticleDisplay = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-top: 4.5rem; */
  margin-bottom: 1.5%;
  padding-bottom: 0.7%;
  background-color: ${props => props.theme.colors.contrast};
  border-top: 0.35rem solid ${props => props.theme.colors.primary};

  .article-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .article {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 30%;
  }

  .thumbnail {
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

  span {
    margin-top: 4%;
    display: flex;
  }

  h4 {
    margin-left: 5px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`;