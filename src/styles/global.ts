import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme['gray-850']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    padding-bottom: 14.625rem;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
    }

  body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif;
  }
`
