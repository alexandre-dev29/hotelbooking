import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import {
  DarkTheme,
  ErrorPopup,
  LightTheme,
} from '@hotelbooking/shared-ui-component';
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { useState } from 'react';
import { onError } from '@apollo/client/link/error';
import { ErrorTypeGraphQl } from '@hotelbooking/shared-types';

// TODO replace online image with local image
function CustomApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [errorType, setErrorType] = useState(ErrorTypeGraphQl.Request);
  const [messagesError, setMessagesError] = useState([]);

  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(true);
  };

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      setMessagesError(graphQLErrors.map((a) => a.message));
      setErrorType(ErrorTypeGraphQl.Request);
    }
    if (networkError) {
      setErrorType(ErrorTypeGraphQl.Network);
      setMessagesError([
        'Connection Issue Please check Your internet connection and try again',
      ]);
    }
  });
  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return (
    <div style={{ position: 'relative' }}>
      <ErrorPopup
        errorType={errorType}
        messages={messagesError}
        onCloseEvent={setIsOpen}
        openStatus={isOpen}
      />
      <Head>
        <title>Welcome To the hotel admin</title>
      </Head>

      <NextThemesProvider
        defaultTheme={'system'}
        attribute={'class'}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default CustomApp;
