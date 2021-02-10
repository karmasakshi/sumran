import Document, { Head, Html, Main, NextScript } from 'next/document';

const applicationName: string = 'Sumran';
const description: string = 'Fresh veggies, harvested weekly.';
const domain: string = 'https://sumran.in';
const keywords: string = 'sumran, organic, farms, gurgaon, fresh, vegetables, veggies, buy';
const ogImageUrl: string = domain + '/icons/og-image.jpg';

class MyDocument extends Document {

  render(): JSX.Element {

    return (

      <Html lang="en">

        <Head>

          {/* General Icons */}
          <link rel="icon" type="image/png" href="/favicon.ico"></link>
          <link rel="icon" sizes="16x16" type="image/png" href="/icons/favicon-16x16.png"></link>
          <link rel="icon" sizes="32x32" type="image/png" href="/icons/favicon-32x32.png"></link>

          {/* General Meta */}
          <meta name="application-name" content={applicationName}></meta>
          <meta name="description" content={description}></meta>
          <meta name="keywords" content={keywords}></meta>

          {/* Apple Icons and Meta */}
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
          <meta name="apple-mobile-web-app-title" content={applicationName}></meta>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"></link>

          {/* Facebook Meta */}
          <meta property="og:description" content={description}></meta>
          <meta property="og:image" content={ogImageUrl}></meta>
          <meta property="og:image:height" content="279"></meta>
          <meta property="og:image:width" content="279"></meta>
          <meta property="og:title" content={applicationName}></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content={domain}></meta>

          {/* Google Icons and Meta */}
          <meta name="theme-color" content="#ffffff"></meta>

          {/* Twitter Meta */}
          <meta property="twitter:card" content="summary"></meta>
          <meta property="twitter:description" content={description}></meta>
          <meta property="twitter:image" content={ogImageUrl}></meta>
          <meta property="twitter:title" content={applicationName}></meta>
          <meta property="twitter:url" content={domain}></meta>

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"></link>

          {/* Manifest */}
          <link rel="manifest" href="/site.webmanifest"></link>

        </Head>

        <body className="antialiased leading-relaxed">
          <Main />
          <NextScript />
        </body>

      </Html>

    );

  }

}

export default MyDocument;
