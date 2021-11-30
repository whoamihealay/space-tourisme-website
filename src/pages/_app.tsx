import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";
import Theme from "../styles/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
