import React from 'react';
import Helmet from 'react-helmet';

import LogoImage from '../assets/favicon.png';

const Head = ({ siteMetadata }) => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={siteMetadata.description} />
    <title>siteMetadata.title</title>
    <meta property="og:title" content={siteMetadata.title} />
    <meta property="og:url" content={siteMetadata.siteUrl} />
    <meta property="og:site_name" content={siteMetadata.title} />
    <meta
      property="og:image"
      content="https://avatars1.githubusercontent.com/u/8567270?v=3&s=300"
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={siteMetadata.title} />
    <meta name="twitter:description" content={siteMetadata.description} />

    <link rel="icon" href={LogoImage} />

    <link
      rel="search"
      type="application/opensearchdescription+xml"
      href="/rss.xml"
      title="JIGSAWYE"
    />
  </Helmet>
);

export default Head;
