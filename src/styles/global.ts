import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    background: ${props => props.theme["gray-600"]};
    --webkit-font-smoothing: antialiased;
    color: ${props => props.theme["gray-100"]};
  }

  body, input, textarea, button{
    font-family: "inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`