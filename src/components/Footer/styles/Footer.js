import styled from 'styled-components';

export const FooterApp = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${props => props.theme.colors.secondary};
    font-size: 0.9rem;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  
  div.section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  div.copyright-section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 2%;
    margin-left: 2%;
  }
`;