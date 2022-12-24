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
    background-color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: Popins, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
