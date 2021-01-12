const headers = async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Referrer-Policy',
        value: 'no-referrer'
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
