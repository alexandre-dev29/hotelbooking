import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import {
  DarkTheme,
  ErrorPopup,
  ErrorTypeGraphQl,
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
import { setContext } from '@apollo/client/link/context';

function CustomApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [errorType, setErrorType] = useState(ErrorTypeGraphQl.Request);
  const [messagesError, setMessagesError] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  const httpLink = new HttpLink({
    uri: 'http://localhost:3333/graphql',
  });
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      setMessagesError(graphQLErrors.map((a) => a.message));
      setErrorType(ErrorTypeGraphQl.Request);
      setIsOpen(true);
    }
    if (networkError) {
      setErrorType(ErrorTypeGraphQl.Network);
      setMessagesError([
        'Connection Issue Please check Your internet connection and try again',
      ]);
      setIsOpen(true);
    }
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('accessToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return (
    <div style={{ position: 'relative' }}>
      <ErrorPopup
        errorType={errorType}
        messages={messagesError}
        onCloseEvent={closeModal}
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
