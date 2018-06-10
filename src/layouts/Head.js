import React from 'react';
import Helmet from 'react-helmet';

import LogoImage from '../assets/favicon.png';

const Head = () => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="個人筆記及教學空間，包含了 PHP / Laravel、JavaScript / React.js、DevOps 等等⋯⋯，及一些雜七雜八的記錄。"
    />
    <meta
      property="og:image"
      content="https://avatars1.githubusercontent.com/u/8567270?v=3&s=300"
    />
    <link rel="icon" href={LogoImage} />
    <link
      rel="search"
      type="application/opensearchdescription+xml"
      href="/atom.xml"
      title="JIGSAWYE"
    />
  </Helmet>
);

export default Head;
