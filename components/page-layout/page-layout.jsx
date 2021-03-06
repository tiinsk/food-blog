import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../../theme';

export const PageLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Food Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Material+Icons&display=block"
          rel="stylesheet"
        />
      </Head>

      <main>{children}</main>
    </ThemeProvider>
  );
};
