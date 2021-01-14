import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { logNavigation } from '../services/analytics';
import '../styles/global.scss';

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }: AppProps): JSX.Element => {

  const router = useRouter();

  useEffect(() => {

    const navigationHandler = (url: string) => {

      logNavigation(url);

    };

    router.events.on('routeChangeStart', navigationHandler);

    return () => {

      router.events.off('routeChangeStart', navigationHandler);

    };

  }, [router.events]);

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
