module.exports = {
  siteMetadata: {
    title: 'JIGSAWYE',
    author: 'Evan Ye',
    description: '',
    siteUrl: 'https://jigsawye.com',
    disqusShortname: 'jigsawnotes',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-57230871-3',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
  ],
};
