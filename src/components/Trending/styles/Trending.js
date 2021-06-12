import styled from "styled-components";

export const TrendingDisplay = styled.section`
width: 100%;
background-color: ${props=> props.theme.colors.contrast};
padding-top: 0.8%;
padding-bottom: 1.5%;
margin-top:5rem;
border-top: 0.35rem solid ${props => props.theme.colors.primary};

h3,p {
  margin-left: 2.5%;
}
img {
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  padding: 1.5%;
  width: 92%;
  /* height: 40%; */
  /* background-color:${props => props.theme.colors.secondary}; */
  background-color: #f5f0e1;
}
`;