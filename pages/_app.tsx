import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles.scss';

const MyApp: (props: AppProps) => JSX.Element = ({ Component, pageProps }: AppProps): JSX.Element => (

  <>

    <Head>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
    </Head>

    <Component {...pageProps} />

  </>

);

export default MyApp;
