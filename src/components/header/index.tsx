import { HeaderContainer } from "./styles";
import logoTodo from "../../assets/ToDo-logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTodo} alt="" />
    </HeaderContainer>


  )
}