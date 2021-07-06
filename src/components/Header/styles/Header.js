import styled from 'styled-components';

export const HeaderNav = styled.header`
  background-color: ${props => props.theme.colors.primary};
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
  position: fixed;
  width: 100%;

  .react-switch-handle div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 5%;
  }



  a {
    text-decoration: none;
  }

  input {
    width: 20%;
    background-color: ${props =>  props.theme.colors.secondary};
    color: ${props =>  props.theme.colors.text};
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  h3 {
    color: ${props => props.theme.colors.secondary};
  }

  .toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .modal-background  {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    display: none;
    top: 0px;
    z-index: 2000;
    justify-content: center;
    align-items: center;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0)
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0)
    }
  }

  .modal-background.true {
    display: flex;
    flex-direction: column;
    animation: modal .3s;
  }

  .modal-background.true .modal {
    animation: modal .3s;
  }

  /* .modal {
    display: flex;
    flex-direction: column;
  } */
`;