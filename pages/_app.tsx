import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/global.scss';

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }: AppProps): JSX.Element => {

  const router = useRouter();

  useEffect(() => {

    const logPageView = (url: string) => {

      logPageView(url);

    };

    router.events.on('routeChangeStart', logPageView);

    return () => {

      router.events.off('routeChangeStart', logPageView);

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
