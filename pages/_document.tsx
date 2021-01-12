import Document, { Head, Html, Main, NextScript } from 'next/document';

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
          <meta name="application-name" content="Sumran"></meta>
          <meta name="description" content="Fresh veggies, harvested weekly."></meta>
          <meta name="keywords" content="sumran, organic, farms, gurgaon, fresh, vegetables, veggies, buy"></meta>

          {/* Apple Icons and Meta */}
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
          <meta name="apple-mobile-web-app-title" content="Sumran"></meta>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"></link>
          <link rel="mask-icon" color="#282022" href="/icons/safari-pinned-tab.svg"></link>

          {/* Facebook Meta */}
          <meta property="og:description" content="Fresh veggies, harvested weekly."></meta>
          <meta property="og:image" content="https://sumran.in/icons/og-image.jpg"></meta>
          <meta property="og:image:height" content="279"></meta>
          <meta property="og:image:width" content="279"></meta>
          <meta property="og:title" content="Sumran"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://sumran.in"></meta>

          {/* Google Icons and Meta */}
          <meta name="theme-color" content="#ffffff"></meta>

          {/* Microsoft Icons and Meta */}
          <meta name="msapplication-config" content="/icons/browserconfig.xml"></meta>

          {/* Twitter Meta */}
          <meta property="twitter:card" content="summary"></meta>
          <meta property="twitter:description" content="Fresh veggies, harvested weekly."></meta>
          <meta property="twitter:image" content="https://sumran.in/icons/og-image.jpg"></meta>
          <meta property="twitter:title" content="Sumran"></meta>
          <meta property="twitter:url" content="https://sumran.in"></meta>

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"></link>

          {/* Manifest */}
          <link rel="manifest" href="/manifest.webmanifest"></link>

        </Head>

        <body className="antialiased leading-relaxed">
          <Main />
          <NextScript />
        </body>

      </Html>

    );

  }

}

export default MyDocument
