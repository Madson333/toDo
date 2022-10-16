import styled from "styled-components";

interface TitleProps {
  checked: boolean;
}

export const WrapList = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 64px;
  flex: 1;
`

export const WrapInfo = styled.div`
  display:flex;
  justify-content: space-between;
  flex: 1;

`

export const Info = styled.div`
  strong{
    margin-right: 5px;
    color: ${props => props.theme.blue};
  };
  
  span {
    background: ${props => props.theme["gray-400"]};
    border-radius: 999px;

    padding: 0.125rem 0.5rem;
  }
 
`
export const Completed = styled.div`
  strong{
    margin-right: 5px;
    color: ${props => props.theme.purpleDark};
  };

  span {
    background: ${props => props.theme["gray-400"]};
    border-radius: 999px;

    padding: 0.125rem 0.5rem;
  }
`

export const List = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme['gray-400']};
  align-items: center;
  padding: 10px;
  
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #333333;


`;

export const Title = styled.span<TitleProps>`
  text-decoration-line: ${props => props.checked ? "line-through" : "none"};
  color: ${props => props.checked ? "#808080" : ""}
`;

export const Initial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
  
  color: ${props => props.theme['gray-300']};

  img {
    width:3.5rem;
    padding-bottom: 1rem;
  };
  
`