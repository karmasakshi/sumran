import { logNavigation } from '@services/analytics';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }: AppProps): JSX.Element => {

  const router = useRouter();

  useEffect(() => {

    const logNavigationHandler = (url: string) => {

      logNavigation(url);

    };

    router.events.on('routeChangeStart', logNavigationHandler);

    return () => {

      router.events.off('routeChangeStart', logNavigationHandler);

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
