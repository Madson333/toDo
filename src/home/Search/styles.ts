import styled from "styled-components";


export const WrapSearch = styled.div`
display:flex;
width: 100%;
margin-top: -28px;

input{
  flex: 1;
  padding: 1rem;
  margin-right: 0.5rem;
  background: ${props => props.theme['gray-400']};
  border: 0;
  border-radius: 6px; 
}

button{
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${props => props.theme.blue};
  color: ${props => props.theme['gray-100']};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:not(:disabled):hover{
    background: ${props => props.theme.blueDark}
  };

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  };
}
`