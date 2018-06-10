module.exports = {
  siteMetadata: {
    title: 'JIGSAWYE',
    author: 'Evan Ye',
    description:
      '個人筆記及教學空間，包含了 PHP / Laravel、JavaScript / React.js、DevOps 等等⋯⋯，及一些雜七雜八的記錄。',
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
