import styled from "styled-components";

export const UserDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  .sidebar {
    background-color: ${props => props.theme.colors.contrast};
    width: 23%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-top: 0.35rem solid ${props => props.theme.colors.primary};
  }

  .index-link {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  .info-card {
    width: 90%;
    margin: 5%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .profile-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .username-span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .btn-signout {
    font-size: 0.8rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    border: 0.5px solid ${props => props.theme.colors.text};
    padding: 3px;
  }

  .btn-signout:hover {
    color: ${props => props.theme.colors.primary};
    border: 0.5px solid ${props => props.theme.colors.primary};
  }

  //verificar erro aqui 
  /* .country-span {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  } */

  .username {
    margin-right: 5%;
  }

  .profile-info img {
    width: 30%;
    /* margin-bottom: 1rem; */
  }

  .profile-info div img {
    width: 12%;
    /* margin-left: 5%; */
  }

  .info-card h3 {
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 1rem;
  }

  .index {
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .index h3 {
    margin-bottom: 2%;
  }

  .index h3:hover {
    color: ${props => props.theme.colors.primary};
  }

  .main-content {
    background-color: ${props => props.theme.colors.contrast};
    border-top: 0.35rem solid ${props => props.theme.colors.primary};
    width: 73%;
    /* margin: 5%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-content h2 {
    margin: 1.5%;
  }

  .run-table {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;