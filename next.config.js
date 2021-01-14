const headers = async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://sumran.in'
      },
      {
        key: 'Content-Security-Policy',
        value: process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true' ? "connect-src 'self'; default-src 'none'; font-src https://fonts.gstatic.com; img-src 'self' data:; manifest-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; require-trusted-types-for 'script'; upgrade-insecure-requests;" : ''
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
    ]
  }
];

const rewrites = async () => [
  {
    source: '/sb.js',
    destination: 'https://cdn.splitbee.io/sb.js'
  },
  {
    source: '/sb-api/:slug',
    destination: 'https://hive.splitbee.io/:slug'
  }
];

module.exports = {
  headers,
  reactStrictMode: true,
  rewrites
};
