import { ThemeProvider } from "styled-components";
import { QuestionForm } from "./pages/QuestionForm";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QuestionForm />
    </ThemeProvider>
  );
}
