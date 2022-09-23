import { ThemeProvider } from 'styled-components'
import { Header } from './Components/Header'
import { Posts } from './pages/Post'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />

      <Posts />
    </ThemeProvider>
  )
}
