import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globals";
import theme from "./styles/theme";
import Routes from "./routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
