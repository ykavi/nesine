import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import { MainLayout } from "@layout";
import { BasketProvider } from "@context";
import { Basket } from "@components";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>CASE</title>;
      <meta name="description" content={"description"} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
    </Head>

    <ThemeProvider theme={theme}>
      <BasketProvider>
        <MainLayout>
          <Basket />
          <Component {...pageProps} />
        </MainLayout>
      </BasketProvider>
    </ThemeProvider>
  </>
);

export default MyApp;
