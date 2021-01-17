/* eslint-disable @typescript-eslint/explicit-function-return-type */

const headers = async () => [
  {
    headers: [
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://sumran.in'
      },
      {
        key: 'Content-Security-Policy',
        value: process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true' ? "connect-src 'self'; default-src 'self'; font-src https://fonts.gstatic.com; img-src 'self' data:; manifest-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; require-trusted-types-for 'script'; upgrade-insecure-requests;" : ''
      },
      {
        key: 'Permissions-Policy',
        value: 'autoplay=(), camera=(), fullscreen=(), geolocation=(), microphone=()'
      },
      {
        key: 'Referrer-Policy',
        value: 'no-referrer'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'X-XSS-protection',
        value: '1; mode=block'
      }
    ],
    source: '/(.*)'
  }
];

const rewrites = async () => [
  {
    destination: 'https://cdn.splitbee.io/sb.js',
    source: '/sb.js'
  },
  {
    destination: 'https://hive.splitbee.io/:slug',
    source: '/sb-api/:slug'
  }
];

module.exports = {
  headers,
  reactStrictMode: true,
  rewrites
};
