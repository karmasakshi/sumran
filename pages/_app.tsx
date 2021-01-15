import '@styles/global.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { version } from '../package.json';

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }: AppProps): JSX.Element => {

  useEffect((): void => {

    setTimeout((): void => {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).splitbee) (window as any).splitbee.user.set({ appVersion: version });

    }, 5000);

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
