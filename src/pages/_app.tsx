import '../styles/css/globals.css';
import '../styles/scss/styles.scss';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ToastContainer />  
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
