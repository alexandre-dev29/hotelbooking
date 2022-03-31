import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NextUIProvider } from '@nextui-org/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome To the hotel admin</title>
      </Head>

      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default CustomApp;
