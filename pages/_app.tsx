import splitbee from '@splitbee/web';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { version } from '../package.json';

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }: AppProps): JSX.Element => {

  useEffect((): void => {

    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js'
    });

    splitbee.user.set({ appVersion: version });

  }, []);

  return (

    <>

      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
      </Head>

      <Component {...pageProps} />

    </>

  );

};

export default MyApp;
