module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        url: 'https://countries.trevorblades.com',
      },
    },
  ],
};
