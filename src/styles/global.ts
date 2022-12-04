import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['primaryPink']};
  }

  body {
    background-color: ${(props) => props.theme['background']};
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`