import { ThemeProvider } from "styled-components";
import { ContainerChallenge } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ContainerChallenge>
        <h1>Avaliação de satisfação</h1>
        <p>Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um amigo ou familiar?</p>
        <input type="range" min="0" max="10" step="1" />
        <textarea />
        <p>*Obrigatório</p>
        <button>Próximo</button>
      </ContainerChallenge>
    </ThemeProvider>
  );
}
