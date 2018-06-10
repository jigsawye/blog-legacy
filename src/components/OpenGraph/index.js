import React from 'react';
import Helmet from 'react-helmet';

const OpenGraph = ({ excerpt, title, url }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={excerpt} />

    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={excerpt} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={excerpt} />
  </Helmet>
);

export default OpenGraph;
