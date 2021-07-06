import styled from 'styled-components';

export const SignUpDisplay = styled.div`
width: 30%;
background-color: ${props=> props.theme.colors.contrast};
padding-top: 0.8%;
padding-bottom: 1.5%;
margin-bottom: 2rem;
border-top: 0.35rem solid ${props => props.theme.colors.primary};

.up {
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.close {
  transform: rotate(45deg);
}

.close:hover {
  color: ${props => props.theme.colors.primary};
}

.middle {
  margin-left: 5%;
  margin-bottom: 2%;
  
}

.middle label {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3%;
}

.middle label p {
  width: 45%;
}

.middle label input {
  width: 55%;
}

.low {
  margin-left: 5%;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

input {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  padding: 5px;
}

input:focus {
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
}

button {
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: 5px;
  font-size: 1rem;
  border: 0.5px solid ${props => props.theme.colors.text};
  margin-right: 5%;
  }

  button:hover {
  color: ${props => props.theme.colors.primary};
  border: 0.5px solid ${props => props.theme.colors.primary};
  }

.signup-button {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 0.5px solid ${props => props.theme.colors.text};
}

.signup-button:hover {
  color: ${props => props.theme.colors.secondary};
  border: 0.5px solid ${props => props.theme.colors.secondary};
}


`;