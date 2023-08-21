import '../styles/css/globals.css';
import '../styles/scss/styles.scss';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import ToasterContainer from '@/components/layouts/ToasterContainer';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <ToasterContainer />  
      <Component {...pageProps} />
    </Provider>
  </SessionProvider>
}

export default MyApp
