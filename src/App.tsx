import { ThemeProvider } from "styled-components";
import { Challenge } from "./pages/Challenge";
import { SubmittedChallenge } from "./pages/SubmittedChallenge";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Challenge />
    </ThemeProvider>
  );
}
