import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DarkTheme, LightTheme } from '@hotelbooking/shared-ui-component';

// TODO replace online image with local image
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Welcome To the hotel admin</title>
      </Head>

      <NextThemesProvider
        defaultTheme={'system'}
        attribute={'class'}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default CustomApp;
