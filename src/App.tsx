import { useState } from 'react'
import { Header } from './components/header'
import { Home } from './home'

import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <GlobalStyle />
    </ ThemeProvider>
  )
}


