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
        value: process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true' ? "upgrade-insecure-requests; base-uri 'self'; default-src 'none'; connect-src 'self'; font-src 'self' https://fonts.gstatic.com; form-action 'none'; frame-ancestors 'none'; img-src 'self' data:; manifest-src 'self'; object-src 'none'; script-src 'self'; script-src-elem 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; require-trusted-types-for 'script'" : ''
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

module.exports = {
  headers,
  reactStrictMode: true
};
