import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "@theme";
import { MainLayout } from "@layout";
import { BasketProvider, RateProvider } from "@context";

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
        <RateProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </RateProvider>
      </BasketProvider>
    </ThemeProvider>
  </>
);

export default MyApp;
