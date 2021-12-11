module.exports = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      },
    ]
  },
}
